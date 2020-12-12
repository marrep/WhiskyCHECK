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
                    'name' => 'Marcel',
                    'surname' => 'Reperich',
                ];

        // assert
        $this->assertEquals(true, $recordFinder->doesOfferExist(['name' => 'Marcel', 'surname' => 'Reperich']));
    } 
}