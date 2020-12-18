<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\OrderRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use App\Serializer\OrderSerializer;


class OrderController extends AbstractController
{
    /**
     * @Route("/orders", methods={"GET"})
     */
    public function index(Request $request, OrderRepository $orderRepository, OrderSerializer $serializer): JsonResponse
    {
        $orders = $orderRepository->findAll();
    
        return new JsonResponse(
            $serializer->serialize($orders),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/create-order", methods={"POST"})
     */
    public function create(
        Request $request, 
        OrderRepository $orderRepository,
        OrderSerializer $serializer
        ): JsonResponse {
    
            $newOrder = $serializer->deserialize($request->getContent());

            $orderRepository->save($newOrder);

            return new JsonResponse(
                $serializer->serialize($newOrder),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }


}
