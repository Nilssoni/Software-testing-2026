import { beforeEach, describe, expect, it, vi } from "vitest";
import * as dogController from "../controllers/dogController";
import { app } from "../index";
import request from "supertest";

vi.mock('../controllers/dogController')

describe("dogRoutes - /api/dogs/random", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    beforeEach(() => {
        vi.resetAllMocks();
    });

    //POSITIVE TEST

    it("returns 200 and success true with mocked image url", async () => {
        const mockData = {
            "message": "https://images.dog.ceo/breeds/stbernard/n02109525_15579.jpg",
            "status": "success"
        };

        vi.spyOn(dogController, "getDogImage").mockImplementation(async (_req, res) => {
            res.json({
                success: true,
                data: mockData
            });
        });

        const response = await request(app).get("/api/dogs/random");

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

    // NEGATIVE TEST

    it ("returns 500 and error message when controller fails", async () => {
        const mockError = {
            success: false,
            error: "Failed to fetch dog image: Network error"
        };

        vi.spyOn(dogController, "getDogImage").mockImplementation(async (_req, res) => {
            res.status(500).json(mockError);
        });

        const response = await request(app).get("/api/dogs/random");

        expect(response.status).toBe(500);
        expect(response.body.success).toBe(false);
        expect(response.body.error).toBe("Failed to fetch dog image: Network error");
    });
});