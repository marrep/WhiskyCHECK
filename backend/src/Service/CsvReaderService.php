<?php

namespace App\Service;

use App\Entity\Offer;
use App\Entity\Product;
use App\Repository\OfferRepository;
use App\Repository\ProductRepository;
use App\Service\OfferDataHandler;
use App\Service\ProductDataHandler;
use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;

class CsvReaderService
{
    /**
     * @var EntityManagerInterface
     */
    public $em;
    public $repository;
    public $offerDataHandler;
    public $productDataHandler;

    public function __construct(EntityManagerInterface $em, ProductRepository $repository, OfferDataHandler $offerDataHandler, ProductDataHandler $productDataHandler)
    {
        $this->em = $em;
        $this->repository = $repository;
        $this->offerDataHandler = $offerDataHandler;
        $this->productDataHandler = $productDataHandler;

        parent::__construct();
    }

    public function useData(): void 
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