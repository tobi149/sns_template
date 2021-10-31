<?php

/**
 * Extension Manager/Repository config file for ext "sns_template".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'sns Template',
    'description' => 'Template von Silas Noah Stoehr',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.2.0-10.4.99',
            'fluid_styled_content' => '10.2.0-10.4.99',
            'rte_ckeditor' => '10.2.0-10.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Sns\\SnsTemplate\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Silas Noah Stoehr',
    'author_email' => 'kontakt@silasstoehr.de',
    'author_company' => 'sns',
    'version' => '1.0.0',
];
