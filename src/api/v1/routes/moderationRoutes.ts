import { Router } from "express";
import {
    moderatePost,
    flagUser,
    getPostById,
    getUserProfile,
    getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

/**
 * @openapi
 * /moderation/post/{id}:
 *   get:
 *     summary: Get post by id
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the post
 *     responses:
 *       '200':
 *         description: Post retrieved successfully
 *       '400':
 *         description: Invalid post
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
router.get("/post/:id", getPostById);

/**
 * @openapi
 * /moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate post by id
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the post
 *     responses:
 *       '200':
 *         description: Post moderated successfully
 *       '400':
 *         description: Invalid post
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
router.post("/post/:id/moderate", moderatePost);

/**
 * @openapi
 * /moderation/user/{id}/profile:
 *   get:
 *     summary: Get user profile by id
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the user
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *       '400':
 *         description: Invalid user
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get("/user/:id/profile", getUserProfile);

/**
 * @openapi
 * /moderation/user/{id}/flag:
 *   post:
 *     summary: Flag a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the user to flag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason:
 *                 type: string
 *                 description: The reason for flagging the user
 *     responses:
 *       '200':
 *         description: User flagged successfully
 *       '400':
 *         description: Invalid user
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

router.post("/user/:id/flag", flagUser);

/**
 * @openapi
 * /moderation/content/flags/stats:
 *   get:
 *     summary: Retrieve statistics on flagged content
 *     tags: [Content]
 *     responses:
 *       '200':
 *         description: Flagged content statistics
 *       '400':
 *         description: Invalid content
 *       '404':
 *         description: Content not found
 *       '500':
 *         description: Internal server error
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;