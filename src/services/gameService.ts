import { PrismaClient } from "@prisma/client";
import type { Game } from "../types/game";

const prisma = new PrismaClient();

export const gameService = {
  async getAllGames() {
    return prisma.game.findMany();
  },

  async getGameById(id: number) {
    return prisma.game.findUnique({
      where: { id },
    });
  },

  async getGameBySlug(slug: string) {
    return prisma.game.findUnique({
      where: { slug },
    });
  },

  async getGamesByCategory(category: string) {
    return prisma.game.findMany({
      where: { category },
    });
  },

  async createGame(data: Omit<Game, "id" | "createdAt" | "updatedAt">) {
    return prisma.game.create({
      data,
    });
  },

  async updateGame(id: number, data: Partial<Game>) {
    return prisma.game.update({
      where: { id },
      data,
    });
  },

  async deleteGame(id: number) {
    return prisma.game.delete({
      where: { id },
    });
  },
};
