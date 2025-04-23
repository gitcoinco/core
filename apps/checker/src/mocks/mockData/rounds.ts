export const rounds = {
  data: {
    rounds: [
      {
        roundMetadata: {
          name: "Checker Test Round",
          support: {
            info: "yy@yy.yy",
            type: "Email",
          },
          roundType: "private",
          eligibility: {
            description:
              "This grant round is created purely for testing purposes. The project description is intentionally left empty, and the project itself is not intended to provide any meaningful service or product. This round is a placeholder for testing grant application processes.",
            requirements: [
              {
                requirement:
                  "You must provide a link to something (anything). It could be a website, a GitHub repo, or even just a link to your social media.",
              },
              {
                requirement:
                  "Your project must have a title. It can be a random word or phrase. Bonus points for creativity, but it's not required.",
              },
              {
                requirement:
                  'Briefly describe your "project" in one sentence. It can be completely unrelated to the title and should not matter at all.',
              },
              {
                requirement: "Be awesome :)",
              },
            ],
          },
          feesAddress: "",
          feesPercentage: 0,
          programContractAddress:
            "0x107879486cfb4f5e6284033fbe11a3cfd6bb447a119f15729cd8e3fc8ca8aff5",
          quadraticFundingConfig: {
            matchingCap: false,
            sybilDefense: "passport-mbds",
            minDonationThreshold: false,
            matchingFundsAvailable: 0.1,
          },
        },
        strategyName: "allov2.DonationVotingMerkleDistributionDirectTransferStrategy",
        strategyAddress: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
        applicationsStartTime: "2024-11-26T13:50:00+00:00",
        applicationsEndTime: "2024-12-27T23:00:00+00:00",
        donationsEndTime: "2024-12-30T23:00:00+00:00",
        donationsStartTime: "2024-11-29T23:00:00+00:00",
        project: {
          id: "0x107879486cfb4f5e6284033fbe11a3cfd6bb447a119f15729cd8e3fc8ca8aff5",
          projectRoles: [
            {
              address: "0x0d1781f0b693b35939a49831a6c799b938bd2f80",
            },
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
            {
              address: "0x5933fb4969b322220ed8c24f2088633115ecbcc0",
            },
            {
              address: "0x7b0e91c75ad9ec537083f61356c532bb882ea2fb",
            },
            {
              address: "0xb8cef765721a6da910f14be93e7684e9a3714123",
            },
          ],
        },
      },
    ],
  },
};
