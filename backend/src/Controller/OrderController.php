<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Repository\OfferRepository;
use App\Entity\Order;
use Symfony\Component\Serializer\SerializerInterface;

class OrderController extends AbstractController
{
    /**
     * @Route("/orders", methods={"GET"})
     */
    public function index(Request $request, OfferRepository $offerRepository, SerializerInterface $serializer): JsonResponse
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
    protected function create(
        Request $request, 
        OfferRepository $offerRepository,
        SerializerInterface $serializer
        ): JsonResponse {
    
            $newOrder = $serializer->deserialize($request->getContent());
            $campsiteExists = $campsiteRepository->findBy(
                [
                    'date' => $newOrder->getDate(),
                    'items' => $newOrder->getItems(),
                    'customerId' => $newOrder->getCustomerId()
                ]
            );

            if(sizeof($orderExists) > 0) {
                return $this->json(["OrderCreation"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
            }

            $orderRepository->save($newOrder);

            return new JsonResponse(
                $serializer->serialize($newOrder),
                JsonResponse::HTTP_OK,
                [],
                true
            );
    }


}
