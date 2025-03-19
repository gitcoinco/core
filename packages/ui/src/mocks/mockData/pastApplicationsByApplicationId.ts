export const pastApplicationsByApplicationId = {
  applications: [
    {
      project: {
        applications: [
          {
            id: "8",
            roundId: "18",
            statusSnapshots: [
              {
                status: "PENDING",
                updatedAt: "2024-05-08T21:50:53.000Z",
                updatedAtBlock: "119803138",
              },
              {
                status: "APPROVED",
                updatedAt: "2024-05-09T22:11:51.000Z",
                updatedAtBlock: "119846967",
              },
            ],
            status: "APPROVED",
            round: {
              roundMetadata: {
                name: "HyperLocalizer Round One (Mocked)",
                support: {
                  info: "https://t.me/hyperlocalizer_chat",
                  type: "Telegram Group Invite Link",
                },
                roundType: "public",
                eligibility: {
                  description: "Experimental round to fund public goods for local impact",
                  requirements: [
                    {
                      requirement: "Public good that does local impact",
                    },
                  ],
                },
                feesAddress: "",
                feesPercentage: 0,
                programContractAddress:
                  "0x690ca3292c6b22f71dc881efdc80938eefff014d8cd92fd950819287f758d229",
                quadraticFundingConfig: {
                  matchingCap: true,
                  sybilDefense: false,
                  matchingCapAmount: 20,
                  minDonationThreshold: false,
                  matchingFundsAvailable: 50,
                },
              },
            },
          },
          {
            id: "1",
            roundId: "7",
            statusSnapshots: [
              {
                status: "PENDING",
                updatedAt: "2024-03-28T09:44:37.000Z",
                updatedAtBlock: "118010150",
              },
              {
                status: "APPROVED",
                updatedAt: "2024-03-29T06:35:21.000Z",
                updatedAtBlock: "118047672",
              },
            ],
            status: "APPROVED",
            round: {
              roundMetadata: {
                name: "Allo 2 🌐♻️ EcoSynthesisX Spring Round on Optimism (Mocked)",
                support: {
                  info: "https://discord.gg/qkSy83uf",
                  type: "Discord Group Invite Link",
                },
                roundType: "public",
                eligibility: {
                  description:
                    "Allo 2 protocol. EcoSynthesisX Spring round as a space for showcase public good projects, foster coordination and bring funding for bigger impact!  Experimental approach on public good funding utilizing hyperstructure vision and Gitcoin infrastructure. Open for applications. Our Discord https://discord.gg/qkSy83uf",
                  requirements: [
                    {
                      requirement: "",
                    },
                  ],
                },
                feesAddress: "",
                feesPercentage: 0,
                programContractAddress:
                  "0x6c2402cc20967444d61900db0a5e4823d78be1eb379ca4942bb90b3d045f6690",
                quadraticFundingConfig: {
                  matchingCap: false,
                  sybilDefense: false,
                  minDonationThreshold: true,
                  matchingFundsAvailable: 1000,
                  minDonationThresholdAmount: 1,
                },
              },
            },
          },
        ],
      },
    },
  ],
};
