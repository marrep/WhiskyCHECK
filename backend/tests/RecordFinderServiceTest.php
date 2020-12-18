<?php 

namespace App\Test;

use App\Entity\Product;
use App\Entity\Offer;
use App\Service\RecordFinderService;
use PHPUnit\Framework\TestCase;

class RecordFinderServiceTest extends TestCase {
    public function testReturnsTrueOrFalse(){
        // arrange
        $recordFinder = new RecordFinderService();

        // act      
        $data = [
                    'gtin' => 5099873089798,
                    'price' => 17.50,
                ];

        // assert
        $this->assertEquals(true, $recordFinder->doesOfferExist($data));
    } 
}