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
 * /post{id}:
 *   get:
 *     summary: Get post by id
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/postSchema'
 *     responses:
 *       '200':
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/postResponse'
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
 * /post{id}/moderate:
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/postSchema'
 *     responses:
 *       '200':
 *         description: Post moderated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/postResponse'
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
 * /user{id}/profile:
 *   get:
 *     summary: Get user profile by id
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/userSchema'
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/userResponse'
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
 * /user{id}/flag:
 *   post:
 *     summary: Flag a user by id
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/userSchema'
 *     responses:
 *       '200':
 *         description: User flagged successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/userResponse'
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
 * /content/flags/stats:
 *   get:
 *     summary: Retrieve statistics on flagged content
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/validations/contentSchema'
 *     responses:
 *       '200':
 *         description: Flagged content statistics
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/validations/contentResponse'
 *       '400':
 *         description: Invalid user
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;