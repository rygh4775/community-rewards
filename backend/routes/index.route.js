var express = require('express');
var authRoutes = require('./auth.route');
var userRoutes = require('./user.route');
var issueRoutes = require('./issue.route');
var mailRoutes = require('./mail.route');
var balanceRoutes = require('./balance.route');
var purchaseRoutes = require('./purchase.route')

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount auth routes at /auth
router.use('/auth', authRoutes);

/**
* @swagger
* tags:
*   name: User
*   description: User management
* definitions:
*   User:
*     required:
*       - _id
*       - email
*       - status
*       - role
*       - createdAt
*     properties:
*       _id:
*         type: string
*         uniqueItems: true
*       email:
*         type: string
*         uniqueItems: true
*       name: 
*         type: string
*       status:
*         type: string
*       role:
*         type: string
*       createdAt:
*         type: integer
*       registeredAt:
*         type: integer
*       keyStore:
*         type: object
*/
router.use('/users', userRoutes);

// mount issue routes at /issue
router.use('/issue', issueRoutes);

// mount mail routes at /mails
router.use('/mails', mailRoutes);

// mount mail routes at /balance
router.use('/balance', balanceRoutes);

// mount mail routes at /purchase
router.use('/purchase', purchaseRoutes);

module.exports = router;