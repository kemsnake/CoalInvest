<?php


/**
 * Implements base_checkout_form()
 * Display the bitcoin address at the checkout
 *
 */
function commerce_bitcoin_pane_checkout_form($form, $form_state, $checkout_pane, $order) {

  $output = t('Payment address %address', array('%address' => $order->commerce_bitcoin['bitcoin_address'])) . '<br/>';
  $output .= t('Total amount %total BTC', array('%total' => $order->commerce_bitcoin['total_payable'])) . '<br/>';
  $checkout_form['commerce_bitcoin_pane_field_display'] = array(
    '#markup' => $output
  );

  return $checkout_form;
}
