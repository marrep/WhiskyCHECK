<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Repository\OfferRepository;
use App\Entity\Offer;
use Symfony\Component\Serializer\SerializerInterface;

class OffersController extends AbstractController
{
    /**
     * @Route("/api/offers", methods={"GET"})
     */
    public function index(OfferRepository $repository, SerializerInterface $serializer): JsonResponse
    {    
        $offers = $repository->findAll();

        return $this->json([
            'data' => $offers
        ], 200, [], [ObjectNormalizer::CIRCULAR_REFERENCE_HANDLER => function($object) {
                return $object->getProducts();
            }]
        );
    }
}