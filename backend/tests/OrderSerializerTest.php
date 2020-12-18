<?php 

namespace App\Test;

use App\Entity\Order;
use App\Serializer\OrderSerializer;
use PHPUnit\Framework\TestCase;

class OrderSerializerTest extends TestCase {
    public function testDeserializeFunction(){

        $serializer = new OrderSerializer();

        $resultDeserialize = $serializer->deserialize('[{"id":7,"customerId":2,"date":"12\/12\/2020","items":[],"totalPrice":49.80,"totalShipping":3.20,"paymentMethod":"paypal","name":"Marcel","surname":"Reperich","number":99,"city":"Hamburg","zip":22803,"country":"Deutschland","email":"papst@hotmail.de"}]');
        $expectedResultDeserialize = [
            [
                'id' => 7,
                'customerId' => 2,
                'date' => '12\/12\/2020',
                'items' => [],
                'totalPrice' => 49.80,
                'totalShipping' => 3.20,
                'paymentMethod' => 'paypal',
                'name' => 'Marcel',
                'surname' => 'Reperich',
                'street' => 'Bachstraße',
                'number' => 99,
                'city' => 'Hamburg',
                'zip' => 22083,
                'country' => 'Deutschland',
                'email' => 'papst@hotmail.de',
            ]
        ];

        $this->assertEquals($expectedResultDeserialize, $resultDeserialize);
    } 

    public function testSerializeFunction(){

        $resultSerialize = $serializer->serialize($expectedResultDeserialize);

        $expectedResultSerialize = $resultDeserialize;

        $this->assertEquals($expectedResultSerialize, $resultSerialize);
    }
}