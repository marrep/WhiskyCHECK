<?php

namespace App\Service;

use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Product;
use App\Service\RecordFinderService;

class ProductDataHandler {
    public $em;
    public $recordFinderService;
    public $repository;

    public function __construct(EntityManagerInterface $em, RecordFinderService $recordFinderService, ProductRepository $repository) {
        $this->em = $em;
        $this->recordFinderService = $recordFinderService;
        $this->repository = $repository;
    }

    public function uploadProductData(object $productReader) {
        foreach ($productReader as $index => $row) {
            $product = (new Product())
                ->setGtin([$row][0][0])
                ->setTitle([$row][0][1])
                ->setBrand([$row][0][2])
                ->setImage([$row][0][3])
                ->setDescription([$row][0][4])
                ->setSize(intval([$row][0][5]))
                ->setVolume(([$row][0][6]))
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
        }
    }
}