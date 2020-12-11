<?php

namespace App\Command;

use App\Utils\OfferDataHandler;
use App\Utils\ProductDataHandler;
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
    public $recordFinderService;
    public $repository;
    public $offerDataHandler;
    public $productDataHandler;

    /**
     * CsvImportCommand constructor.
     *
     * @param EntityManagerInterface $em
     * @param RecordFinderService $recordFinderService
     * @param ProductRepository $repository
     * @param OfferDataHandler $offerDataHandler
     * @param ProductDataHandler $productDataHandler
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct(EntityManagerInterface $em, RecordFinderService $recordFinderService, ProductRepository $repository, OfferDataHandler $offerDataHandler, ProductDataHandler $productDataHandler)
    {
        $this->em = $em;
        $this->recordFinderService = $recordFinderService;
        $this->repository = $repository;
        $this->offerDataHandler = $offerDataHandler;
        $this->productDataHandler = $productDataHandler;

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
        $productUploader = $this->productDataHandler;
        $offerUploader = $this->offerDataHandler;

        $productReader = Reader::createFromPath(__DIR__ . "/../Data/PRODUCT_DATA.csv", 'r');
        $productUploader->uploadProductData($productReader);

        $offerReader = Reader::createFromPath(__DIR__ . "/../Data/OFFER_DATA.csv", 'r');
        $offerUploader->uploadOfferData($offerReader);

        $products = $this->em->getRepository(Product::class)->findAll();
        foreach ($products as $product) {
            $searchForGtin = $product->getGtin();
            $offersFound = $this->em->getRepository(Offer::class)->findOneBy(array('gtin' => $searchForGtin));
            $product->addOffer($offersFound);
        }
    }
}