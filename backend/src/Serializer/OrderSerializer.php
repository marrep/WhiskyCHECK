<?php

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Order;

class OrderSerializer {

    private $elementArray = [];
    private function orderArray($element): object {

        $this->elementArray[] = [
            'id' => $element->getId(),
            'customerId' => $element->getCustomerId(),
            'date' => $element->getDate(),
            'items' => $element->getItems(),
            'totalPrice' => $element->getTotalPrice(),
            'totalShipping' => $element->getTotalShipping(),
            'paymentMethod' => $element->getPaymentMethod(),
            'name' => $element->getName(),
            'surname' => $element->getSurname(),
            'number' => $element->getNumber(),
            'city' => $element->getCity(),
            'zip' => $element->getZip(),
            'country' => $element->getCountry(),
            'email' => $element->getEmail()
        ];
        return($this);
    }

    public function serialize($elements) {
        if (is_array($elements)) {
            foreach($elements as $element) {
                $this->orderArray($element);
            }
        } else {
            $this->orderArray($elements);
        }
        return \json_encode($this->elementArray);
    }
    
    public function deserialize($content) {
        $postData = \json_decode($content);

        $orderObject = new Order();
        $orderObject->setCustomerId($postData->customerId);
        $orderObject->setDate($postData->date);
        $orderObject->setItems($postData->items);
        $orderObject->setTotalPrice($postData->totalPrice);
        $orderObject->setTotalShipping($postData->totalShipping);
        $orderObject->setPaymentMethod($postData->paymentMethod);
        $orderObject->setName($postData->name);
        $orderObject->setSurname($postData->surname);
        $orderObject->setStreet($postData->street);
        $orderObject->setNumber($postData->number);
        $orderObject->setCity($postData->city);
        $orderObject->setZip($postData->zip);
        $orderObject->setCountry($postData->country);
        $orderObject->setEmail($postData->email);

        return $orderObject;
    }

}