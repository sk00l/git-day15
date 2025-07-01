import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';
import { Router } from 'express';
import { createComment, getCommentsForBlog } from '../controllers/commentController';

const router = Router();

// Require authentication for posting comments
router.post('/:blogId', ClerkExpressRequireAuth(), createComment);

router.get('/:blogId', getCommentsForBlog);

export default router;