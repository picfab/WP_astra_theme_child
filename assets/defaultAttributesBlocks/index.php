<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function defaultAttributesBlocks() { // phpcs:ignore
	// Register block editor script for backend.
    $test = get_stylesheet_directory().'/assets/defaultAttributesBlocks/js/dist/main.js';
    
	wp_register_script(
		'default-Attributes-blocks', // Handle.
		get_stylesheet_directory_uri().'/assets/defaultAttributesBlocks/js/defaultAttributesBlocks.js', 
		array( 'wp-blocks', 'wp-dom' ), // Dependencies, defined above.
		null,
		true // Enqueue the script in the footer.
	);
	wp_enqueue_script('default-Attributes-blocks');
}

add_action( 'enqueue_block_editor_assets', 'defaultAttributesBlocks' );

