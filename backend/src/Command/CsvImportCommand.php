<?php

namespace App\Command;

use App\Entity\Offer;
use App\Repository\OfferRepository;
use App\Entity\Product;
use App\Repository\ProductRepository;
use App\Service\RecordFinderService;
use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Class CsvImportCommand
 * @package App\ConsoleCommand
 */
class CsvImportCommand extends Command
{
    /**
     * @var EntityManagerInterface
     */
    public $em;
    public $recordFinder;
    public $repository;

    /**
     * CsvImportCommand constructor.
     *
     * @param EntityManagerInterface $em
     * @param RecordFinderService $recordFinder
     * @param ProductRepository $repository
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct(EntityManagerInterface $em, RecordFinderService $recordFinderService, ProductRepository $repository)
    {
        $this->em = $em;
        $this->recordFinderService = $recordFinderService;
        $this->repository = $repository;

        parent::__construct();
    }

    /**
     * Configure
     * @throws \Symfony\Component\Console\Exception\InvalidArgumentException
     */
    public function configure()
    {
        $this
            ->setName('csv:import')
            ->setDescription('Imports all CSV data files')
        ;
    }

    /**
     * @param InputInterface  $input
     * @param OutputInterface $output
     *
     * @return void
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function execute(InputInterface $input, OutputInterface $output)
    {

        $productReader = Reader::createFromPath(__DIR__ . "/../Data/PRODUCT_DATA.csv", 'r');
        foreach ($productReader as $index => $row) {
            $product = (new Product())
                ->setGtin([$row][0][0])
                ->setTitle([$row][0][1])
                ->setBrand([$row][0][2])
                ->setImage([$row][0][3])
                ->setDescription([$row][0][4])
                ->setSize(intval([$row][0][5]))
                ->setVolume(([$row][0][6]), 1)
                ->setOrigin([$row][0][7])
                ->setTaste(str_replace(' ', ',', explode(",",[$row][0][8])))
                ->setCategory([$row][0][9])
                ->setGenre([$row][0][10])
                ->setLevel([$row][0][11]);

            $check = $this->recordFinderService->doesProductExist($product);
            if ($check) {
                print_r("this record already exists!");
            } else {
                $this->em->persist($product);
                $this->em->flush();
            }
        };

        $offerReader = Reader::createFromPath(__DIR__ . "/../Data/OFFER_DATA.csv", 'r');
        foreach ($offerReader as $index => $row) {
            $offer = (new Offer())
                ->setGtin([$row][0][0])
                ->setPrice([$row][0][1])
                ->setShippingPrice([$row][0][2])
                ->setDeliveryTime([$row][0][3])
                ->setSeller([$row][0][4])
                ->setOnStock([$row][0][5]);
            $product = $this->em->getRepository(Product::class)->findOneBy(array('gtin' => [$row][0][0]));
            $offer->setProduct($product);
    
            $check = $this->recordFinderService->doesOfferExist($offer);
            if ($check) {
                print_r("this record already exists!");
            } else {
                $this->em->persist($offer);
                $this->em->flush();
            }
        }

        $products = $this->em->getRepository(Product::class)->findAll();
        foreach ($products as $product) {
            $searchForGtin = $product->getGtin();
            $offersFound = $this->em->getRepository(Offer::class)->findOneBy(array('gtin' => $searchForGtin));
            $product->addOffer($offersFound);
        }

        dump($products); die;

    return Command::SUCCESS;

    }
    
}