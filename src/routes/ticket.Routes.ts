import { Router } from 'express';
import { confirmTicket, payBooking, scanTicket } from '../controllers/ticket.Controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

router.post('/bookings/:bookingId/pay', requireAuth, payBooking);
router.get('/tickets/:ticketId/scan', scanTicket);
router.post('/tickets/:ticketId/confirm', confirmTicket);
router.put('/tickets/:ticketId/confirm', confirmTicket);

export default router;
