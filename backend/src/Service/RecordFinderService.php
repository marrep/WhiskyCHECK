<?php 

namespace App\Service;

use App\Repository\OfferRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Product;
use App\Entity\Offer;

class RecordFinderService {
    private $offerRepository;
    private $productRepository;
    private $em;

    public function __construct(OfferRepository $offerRepository, ProductRepository $productRepository, EntityManagerInterface $em) {
        $this->offerRepository = $offerRepository;
        $this->productRepository = $productRepository;
        $this->em = $em;
    }

    public function doesOfferExist(Offer $offer): bool {
        $gtin = $offer->getGtin();
        $price = $offer->getPrice();
        $findRecord = $this->em->getRepository(Offer::class)->findOneBy(['gtin' => $gtin, 'price' => $price]);
        return !is_null($findRecord);
    }

    public function doesProductExist(Product $product): bool {
        $gtin = $product->getGtin();
        $findRecord = $this->em->getRepository(Offer::class)->findOneBy(['gtin' => $gtin]);
        return !is_null($findRecord);
    }
}