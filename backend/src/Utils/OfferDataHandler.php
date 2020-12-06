<?php

namespace App\Utils;

use App\Repository\OfferRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Offer;
use App\Entity\Product;
use App\Service\RecordFinderService;

class OfferDataHandler {
    public $em;
    public $recordFinder;
    public $repository;

    public function __construct(EntityManagerInterface $em, RecordFinderService $recordFinderService, OfferRepository $repository) {
        $this->em = $em;
        $this->recordFinderService = $recordFinderService;
        $this->repository = $repository;
    }

    public function uploadOfferData(OfferReader $offerReader) {
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
    }
}