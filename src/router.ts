import { Router } from 'express';

export const router = Router();

// List Category

router.get('/categories', (req, res) => {
  res.send('OK');
});

// Create Category
router.post('/categories', (req, res) => {
  res.send('OK');
});

// List Products

router.get('/products', (req, res) => {
  res.send('OK');
});
// Create Product

router.post('/products', (req, res) => {
  res.send('OK');
});

// Get Product by Category

router.post('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List orders

router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create Order

router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status

router.patch('/orders', (req, res) => {
  res.send('OK');
});

// Delete / cancel order

router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});

