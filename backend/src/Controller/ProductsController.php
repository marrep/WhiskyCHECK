<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

class ProductsController extends AbstractController
{
    /**
     * @Route("/api/products", methods={"GET"})
     */
    public function index(ProductRepository $repository, SerializerInterface $serializer): JsonResponse
    {    
        $products = $repository->findAll();

        return $this->json([
            'data' => $products
        ], 200, [], [ObjectNormalizer::CIRCULAR_REFERENCE_HANDLER => function(object $object) {
                return $object->getOffers();
            }]
        );
    }
}