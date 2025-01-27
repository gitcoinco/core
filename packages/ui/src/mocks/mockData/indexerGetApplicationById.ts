export const getApplicationById = {
  id: "0",
  projectId: "0x7f2586fce05d466c9fb3e509be56c02e0af6870f04209d5881c6d100534fec5d",
  chainId: 42161,
  roundId: "609",
  status: "APPROVED",
  metadataCid: "bafkreidtte6gasyfomd6w5krqtyxqzsgnxhsjcjxc4riywdy47jrkf6hum",
  metadata: {
    signature:
      "0x8e5ec2f393c8570cd4cf2d3990e15d51553b6d4ac025a0be49726407fc85d89d46194c7a22eddb52ec646f7399d15d82dd8b0dc9814f12a97607b674a4b7a6211c",
    application: {
      round: "0xd2d99614321becd7cd0636715bbb4c94968e6271",
      answers: [
        {
          type: "email",
          hidden: true,
          question: "Email Address",
          questionId: 0,
          encryptedAnswer: {
            ciphertext: "X2nnSyZKk4G/0TKk6R9RjaJ01T4CQIqg7il0DoKflxcrxVgDmLxmWM4qPOG9Obdw",
            encryptedSymmetricKey:
              "3d7fa6e2f2a14dad731145b91c1d9ff4e1d696706acc42198a107b1e3a4488298da98ee6312e58ed13e252803d20431272cc148e40f4a7d35e6fc0a98d7200b80b7e35f9587a5ebb2de95ed878f7b90f941fb3ff5313cc466e353e5c3d3e2584559c1482ae15ea9cde3ce9c91a258fbc346e4c4ac0818e6305a2e78bf66ec7e400000000000000203bfdcc0aca617ff08db2409505e1a85f977063ec59da7714eb5f123df68c878adc872797a26f04251220af6160cac2ab",
          },
        },
        {
          type: "short-answer",
          answer: "DRPTBL",
          hidden: true,
          question: "Telegram Handle",
          questionId: 1,
        },
        {
          type: "short-answer",
          answer: "https://github.com/Synthetixio/synpress",
          hidden: true,
          question: "Project GitHub Repo",
          questionId: 2,
        },
        {
          type: "short-answer",
          answer: "https://discord.gg/XhZKSRGtWc",
          hidden: true,
          question: "Link to your Public Group Chat",
          questionId: 3,
        },
        {
          type: "short-answer",
          answer:
            "Yes, we have participated in 3 rounds: Web3 Open Source Software, Developer Tooling and Libraries, GG21: Thriving Arbitrum Summer",
          hidden: true,
          question:
            "Have you participated in a previous Gitcoin Grants Round? If so, please name the rounds or link the builder profile associated with previous rounds.",
          questionId: 4,
        },
        {
          type: "paragraph",
          answer:
            "\nSynpress is an e2e testing framwork designed to simplify and improve the testing of Web3 decentralized applications. It solves the problem of inadequate tooling for testing the complex interactions inherent in dApps, such as connecting to wallets, signing transactions, interacting with smart contracts, and handling blockchain events. Existing E2E testing frameworks struggle with these Web3-specific actions, requiring developers to write cumbersome workarounds or rely on unreliable manual testing. Synpress provides dedicated features and APIs to handle these interactions seamlessly, making dApp testing more efficient, reliable, and developer-friendly. It aims to be the standard E2E testing solution for the Web3 ecosystem, ensuring higher quality and more secure dApps.",
          hidden: true,
          question:
            "Provide a brief overview of your tool, library, or framework. What specific problem or inefficiency in the development process does it address?",
          questionId: 5,
        },
        {
          type: "paragraph",
          answer:
            "Synpress simplifies complex Web3 testing scenarios. Its intuitive API and built-in mocking for wallets and local blockchains (like Anvil) drastically reduce the setup time and effort required for e2e testing, allowing developers, especially those new to Web3, to get started quickly. This ease of use enables faster iteration.\n\nEfficiency is improved through Synpress caching mechanism for browser contexts with pre-configured wallets. This significantly speeds up test execution by eliminating repetitive wallet setup steps, as demonstrated by our internal tests where setup time was reduced by up to 80%.\n\nSecurity enhancements come from enabling comprehensive testing of critical dApp interactions. Synpress facilitates robust testing of wallet connections, transaction signing, and smart contract calls, helping developers identify and mitigate vulnerabilities early in the development process.",
          hidden: true,
          question:
            "How does your project reduce development barriers, improve efficiency, or enhance the security of Web3 projects? Please provide specific examples or metrics if available.",
          questionId: 6,
        },
        {
          type: "paragraph",
          answer:
            "Synpress is in active development with a growing community. While still in its alpha stage (v4), the previous version (v3) saw substantial usage and community contributions, demonstrating the demand for a Web3-focused E2E testing solution. We are actively working on building community resources and gathering metrics for the v4 alpha release. Anecdotal feedback from early alpha users highlights the improved developer experience and speed enhancements brought by the new caching mechanism and the cleaner API.\n\nUseful metrics related to synpress:\n\n- npmjs (~14k downloads/week):\nhttps://www.npmjs.com/package/@synthetixio/synpress \n\n- Projects using synpress (includes a lot of big projects like Optimism, Arbitrum, Linea, WalletConnect, Across, Gitcoin and many others): https://github.com/Synthetixio/synpress/network/dependents?package_id=UGFja2FnZS0xNjIwNjMzMjE1\n\n- Downloads trends (up only since 4 years):\n  https://npmtrends.com/@synthetixio/synpress",
          hidden: true,
          question:
            "Describe the current usage and support for your tool within the developer community. This could include GitHub stars, downloads, or testimonials from developers.",
          questionId: 7,
        },
        {
          type: "paragraph",
          answer:
            "Our project roadmap is available here:\nhttps://lindie.app/share/5ffb9e1d3e4b69c05fbdb11b7fb56e6c6f301183\n\nDepending on the grant size, funds will be used in different way. Nevertheless, our main priority for this grant is to enhance our `EthereumWalletMock` to cover wider range of methods, as currently we're not supporting many of them yet.\n\nWhole task (epic) is described here:\nhttps://lindie.app/share/5ffb9e1d3e4b69c05fbdb11b7fb56e6c6f301183/SYN-149",
          hidden: true,
          question:
            "Outline your project's roadmap and how the grant funds will be used to achieve your development goals.",
          questionId: 8,
        },
        {
          type: "paragraph",
          hidden: true,
          question:
            "For any project deploying smart contracts on blockchain networks, please list all your deployer addresses and their corresponding blockchain networks. Use this format for each entry: [deployer_address], [chain_id]—for example, 0x123abc..., 42161 (This represents a deployer address on the Arbitrum network). Please include a separate line for each unique deployer address and blockchain combination.",
          questionId: 9,
        },
      ],
      project: {
        id: "0x7f2586fce05d466c9fb3e509be56c02e0af6870f04209d5881c6d100534fec5d",
        title: "Synpress",
        logoImg: "bafkreibcxewuw2eddh7iiuea73ho4vxws7d3cpccr4slns7cbrpdo6q3he",
        metaPtr: {
          pointer: "bafkreifkskbvxlsbwqvg6ykf5upkpuhfyk5npilq7cwu2z5hf2p5hgpqsi",
          protocol: "undefined",
        },
        website: "https://synpress.io",
        bannerImg: "bafkreiel7b3pblo44wnfogktgm23z6td7e5dmdy7lwzzy2diyp377aivgu",
        createdAt: 1691439308436,
        userGithub: "drptbl",
        credentials: {
          github: {
            type: ["VerifiableCredential"],
            proof: {
              jws: "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..isd9NhS75ZO7slJtO-EsgJp4f6UAbgfqYBQQvwzNcNbONzLqBMNxGwnF9LmkFFgzP95NFRjqU4hoS2m0JSN_Ag",
              type: "Ed25519Signature2018",
              created: "2023-08-07T20:14:06.799Z",
              proofPurpose: "assertionMethod",
              verificationMethod:
                "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC#z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
            },
            issuer: "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
            "@context": ["https://www.w3.org/2018/credentials/v1"],
            issuanceDate: "2023-08-07T20:14:06.799Z",
            expirationDate: "2023-11-05T20:14:06.799Z",
            credentialSubject: {
              id: "did:pkh:eip155:1:0xd35E119782059A27FEAd4EddA8B555f393650BC8",
              hash: "v0.0.0:FEgJkAFXR+3d9wS6PNaaadDrlsmY9WN/gefBZK1JsBE=",
              "@context": [
                {
                  hash: "https://schema.org/Text",
                  provider: "https://schema.org/Text",
                },
              ],
              provider: "ClearTextGithubOrg#Synthetixio#8177587",
            },
          },
          twitter: {
            type: ["VerifiableCredential"],
            proof: {
              jws: "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..6T3y5nFhOBk70U0eqNGsj1hSbKITUx0QwqF_-KXY2D1MIK37iCjWIlMldNdXXK_a4AiDNUQd6Ty_ppP5KH4hBQ",
              type: "Ed25519Signature2018",
              created: "2023-08-07T20:12:52.905Z",
              proofPurpose: "assertionMethod",
              verificationMethod:
                "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC#z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
            },
            issuer: "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
            "@context": ["https://www.w3.org/2018/credentials/v1"],
            issuanceDate: "2023-08-07T20:12:52.905Z",
            expirationDate: "2023-11-05T20:12:52.905Z",
            credentialSubject: {
              id: "did:pkh:eip155:1:0xd35E119782059A27FEAd4EddA8B555f393650BC8",
              hash: "v0.0.0:JPXYebm9ngO8o9AF40COv6w8V3+WvnP8oQd5iAhlp1w=",
              "@context": [
                {
                  hash: "https://schema.org/Text",
                  provider: "https://schema.org/Text",
                },
              ],
              provider: "ClearTextTwitter#Synpress_",
            },
          },
        },
        description:
          "Synpress is an end-to-end testing framework for web applications based on Cypress and Playwright, with support for MetaMask. It is a pioneering tool in web3 end-to-end testing with the potential to evolve into a decentralized network of test runners and continuous integration providers in the future. Synpress is easy to use, fully tested, and includes features such as MetaMask support, headless mode, integrated video recording, and many more. It is also blazingly-fast and extensible, with the ability to add custom commands and plugins. Synpress is already used by several open-source repositories.",
        lastUpdated: 0,
        projectGithub: "Synthetixio",
        projectTwitter: "Synpress_",
      },
      recipient: "0x7b57c388e6149b5c197B925037602d5B6bafFbCc",
    },
  },
  distributionTransaction: null,
  statusSnapshots: [
    {
      status: "PENDING",
      updatedAt: "2024-09-30T22:01:48.000Z",
      updatedAtBlock: "259057447",
    },
    {
      status: "APPROVED",
      updatedAt: "2024-10-09T18:12:27.000Z",
      updatedAtBlock: "262087357",
    },
  ],
  anchorAddress: "0x83ba0bd26a20a2c5f4e9157242b0c0ee659b7a2c",
  round: {
    strategyName: "allov2.DonationVotingMerkleDistributionDirectTransferStrategy",
    strategyAddress: "0xd2d99614321becd7cd0636715bbb4c94968e6271",
  },
  canonicalProject: {
    roles: [
      {
        address: "0xd35e119782059a27fead4edda8b555f393650bc8",
      },
    ],
  },
};
