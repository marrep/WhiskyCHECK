<?php

namespace App\Command;

use App\Service\CsvReaderService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Class CsvImportCommand
 * @package App\ConsoleCommand
 */
class CsvImportCommand extends Command
{
    /**
     * @var EntityManagerInterface
     */
    public $csvReaderService;

    /**
     * CsvImportCommand constructor.
     *
     * @param CsvReaderService $csvReaderService
     *
     * @throws \Symfony\Component\Console\Exception\LogicException
     */
    public function __construct()
    {
        $this->csvReaderService = $csvReaderService;

        parent::__construct();
    }

    /**
     * Configure
     * @throws \Symfony\Component\Console\Exception\InvalidArgumentException
     */
    public function configure()
    {
        $this
            ->setName('csv:import')
            ->setDescription('Imports all CSV data files')
        ;
    }

    /**
     * @param InputInterface  $input
     * @param OutputInterface $output
     *
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $csvCommand = $this->csvReaderService;
        $csvCommand->useData();

        return Command::SUCCESS;
    }
}