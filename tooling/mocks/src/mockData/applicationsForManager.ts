export const applicationsForManagers = {
  data: {
    applications: [
      {
        id: "0",
        projectId: "0x73980e4a960128ce20b1deb65678e7e215b1971b6908bfe7d204acb9420180c5",
        chainId: 11155111,
        roundId: "597",
        status: "APPROVED",
        metadataCid: "bafkreifjme522lkag5yz5hzdwqxvicc4jubfyuxw5nr2h3ixzvo4xzipim",
        metadata: {
          signature:
            "0x47a5468e6b2a714245bda1725c625b929e5c1afbb765d531d810b6fb0b596eb02a02647d8ffbdd7f061cf76f070d09b1259b45e347a51b775cc7bd749f8ba2dc1c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x73980e4a960128ce20b1deb65678e7e215b1971b6908bfe7d204acb9420180c5",
              title: "test",
              metaPtr: {
                pointer: "bafkreif67gqngagnukgkxzyt4gvnqcdohoolimjl4vpytzvhk5meh3v3ii",
                protocol: "undefined",
              },
              website: "https://example.com",
              createdAt: 1716743685304,
              credentials: {},
              description: "test",
              lastUpdated: 0,
            },
            recipient: "0x044B595C9b94A17Adc489bD29696af40ccb3E4d2",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T02:18:48.000Z",
            updatedAtBlock: "7167075",
          },
          {
            status: "APPROVED",
            updatedAt: "2024-11-28T14:09:00.000Z",
            updatedAtBlock: "7170428",
          },
        ],
        anchorAddress: "0xb543d56ee04f516602057429ec4f1c85c19b1319",
        canonicalProject: {
          roles: [
            {
              address: "0x0d1781f0b693b35939a49831a6c799b938bd2f80",
            },
          ],
        },
      },
      {
        id: "1",
        projectId: "0x0ad4d07d45ef3c6807b71f09342201baee881e13b67906d7067df59588dd4879",
        chainId: 11155111,
        roundId: "597",
        status: "REJECTED",
        metadataCid: "bafkreieltkyaoisfno7baeqwun63etfojflvd3c6mpk3w3lhe4kvvg5qam",
        metadata: {
          signature:
            "0x43b0fc0cfac3f6863a716c75d4349cfb7440f27be2b1094d22d68a6b6fced94a2e1aa80d019dd42ec96e8803194d7c127852ec216aa87ffdd1aa31048da89e1b1b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x0ad4d07d45ef3c6807b71f09342201baee881e13b67906d7067df59588dd4879",
              title: "Unicorn Party",
              logoImg: "bafkreibmnvdglgcqhapu3mgusoqkhkoiwdqzxk22cy2lthp4v2cgl5zvp4",
              metaPtr: {
                pointer: "bafkreiazbhtmk7u5wjjq5qfedl6lxuznpmrohbca6nhpk52yt3wt7dfuiu",
                protocol: "undefined",
              },
              website: "https://unicorn.party",
              bannerImg: "bafkreifvew4vbw4bps3554gz5xwgzuaimfzuammpjlsyzcd5o3clj24g3e",
              createdAt: 1710424429780,
              credentials: {},
              description: "I'm a fancy party unicorn",
              lastUpdated: 0,
            },
            recipient: "0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T09:19:00.000Z",
            updatedAtBlock: "7169067",
          },
          {
            status: "REJECTED",
            updatedAt: "2024-11-28T14:09:00.000Z",
            updatedAtBlock: "7170428",
          },
        ],
        anchorAddress: "0x3bbb6cd15ff7d268640409aef5b2d407d4891276",
        canonicalProject: {
          roles: [
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
          ],
        },
      },
      {
        id: "10",
        projectId: "0x6aa53fe03888bf2bbf159644205a9e6fe0d96fd493366c53726b2b0c38f52ca1",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreibyib6252hqlb2plteuwekkwzjrzq3mjg3hgykjdywlkoz2mjt6zi",
        metadata: {
          signature:
            "0xf788068d38e81ec85809c72ffd6a89d6c0d6f289e59f6521cf0593007cbf427d732f5b4cbceed2e2d8cf4b461e1982df35768f05737613722f7700e27cc53bec1b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x6aa53fe03888bf2bbf159644205a9e6fe0d96fd493366c53726b2b0c38f52ca1",
              title: "My P-P-Protocol",
              logoImg: "bafkreigyvk2btilf3tvmmxkimnmylj3uhst2b3axjtglw6qn5lkr4oqmo4",
              metaPtr: {
                pointer: "bafkreic7im7e5gksczjjdtk6yq5fjwju3wkmabtt5f5nek5yb4mi2jeq6e",
                protocol: "undefined",
              },
              website: "https://p-protoco.ll",
              bannerImg: "bafybeigxn2sukxye4sfktemcancg2pu6x6nrnyzklfymwsu4nat45rba6e",
              createdAt: 1706182533442,
              credentials: {},
              description:
                '```\nexport async function getCurrentSubgraphBlockNumber(\n  chainId: number\n): Promise<bigint> {\n  try {\n    const res = await graphql_fetch(\n      `\n        {\n          _meta {\n            block {\n              number,\n              hash\n            }\n          }\n        }\n      `,\n      chainId\n    );\n    return BigInt(res.data._meta.block.number);\n  } catch (error) {\n    console.error(\n      "An error occurred while fetching current subgraph block number:",\n      error\n    );\n    throw error;\n  }\n}\n```',
              lastUpdated: 0,
            },
            recipient: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:28:00.000Z",
            updatedAtBlock: "7177901",
          },
        ],
        anchorAddress: "0x3cdcb6611703a053751d2e82accd4daeb913aaa6",
        canonicalProject: {
          roles: [
            {
              address: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
            },
          ],
        },
      },
      {
        id: "11",
        projectId: "0xa28a0d75acc28d4d53423bf40b6eae6039348a385caf83022d6d937830b59b1a",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreib5sms7kbgm62boquexl7rhdpm5vs3mslaolwwajnmqpath7uf2ma",
        metadata: {
          signature:
            "0x1ca1f60de90877a08d1f30fb2f82e27680de32ed789f40cc9ca36072dc21c2c9036bb14324081f226c83d319ecc1de7f87cd217f15535971dbc1668ad17994f31b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0xa28a0d75acc28d4d53423bf40b6eae6039348a385caf83022d6d937830b59b1a",
              title: "🦄 No Money Donations 🌈",
              logoImg: "bafkreidzsmnckc4fvm7mz4y642ihjsqjlrb4hr4llhdpks6xcopjdfnprm",
              metaPtr: {
                pointer: "bafkreiepmtbpydjtuk4u5ns3ggh3my52enimsr7viogf7hse7ujrz4ihku",
                protocol: "undefined",
              },
              website: "https://no-money-no-probl.em",
              bannerImg: "bafkreif2wedknble4lyq3u2dzp2bhwkdfg6hk7k4efxzlnzi5cpl2rrgxy",
              createdAt: 1711561335428,
              credentials: {},
              description:
                "![Meme](https://i.imgflip.com/8kpdwx.jpg)\n\n# 🦄 No Money Donations 🌈\n\n## Introduction\n\n🚀 Welcome to our magical idea about No Money Donations! We believe in redefining the art of giving. 🌟\n\n## The Idea\n\n💡 Picture a world where donations are more than just money. Here, we embrace the idea of gifting Idea Validation, Feedback, Resources (including mystical credits), Mentorship and others! 🌟✨\n\n## Highlights\n\n### 🌈 Idea Validation\n- Contributing idea validation empowers projects to refine their visions and ensure their concepts are viable. It's like granting wings to dreams, allowing them to soar into reality!\n\n### 🚀 Feedback\n- Feedback is the heartbeat of progress. Those who offer feedback provide invaluable insights that shape the trajectory of a project, guiding it toward success in the vast cosmos of Web3!\n\n### 💎 Resources\n- Resources are the building blocks of magic. With every resource donation, contributors provide the necessary spark to ignite a project's potential and illuminate the path forward! (e.g.Alchemy donates credits)\n\n### 🦄 Mentorship\n- Mentorship is the guiding star in the constellation of learning. Donors who offer mentorship share their wisdom, nurturing the next generation of Web3 innovators and fostering a community of collaboration and growth!\n",
              lastUpdated: 0,
            },
            recipient: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:29:12.000Z",
            updatedAtBlock: "7177907",
          },
        ],
        anchorAddress: "0x2c7296a5ec0539f0a018c7176c97c92a9c44e2b4",
        canonicalProject: {
          roles: [
            {
              address: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
            },
          ],
        },
      },
      {
        id: "12",
        projectId: "0xa55516f1a6564b3b645e81d2cd28fab3197ef6d4148da9c96729275957a4fe3a",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreid4g3rhlf2hm5y6xc65iolh6wj6dqs7jjjbk7pktva7vognxtcbky",
        metadata: {
          signature:
            "0x0a5bc2e5a6ec225d30c051f84bbfdf7219f5437b5cdbc1d3cde3530948ee26ce03b01e075127c961bef15895fc7cfe1bcc06c54407b6e4111c5bbb4f327dd52b1c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0xa55516f1a6564b3b645e81d2cd28fab3197ef6d4148da9c96729275957a4fe3a",
              title: "Hyper Fi",
              logoImg: "bafkreidta7stwoltp4fc57cqkora5dsd6digvfmsr7npqpsollmt2rhira",
              metaPtr: {
                pointer: "bafkreibfre4mapst7zpwnov5ntccealoqbdpqqjyfr6t2o3d7cuydn7taq",
                protocol: "undefined",
              },
              website: "https://hyper.fi",
              bannerImg: "bafkreignlptdxbg7e3ulakm4ysp3yyownnhbze52aq7gukxntxs7ha62vi",
              createdAt: 1706183130614,
              credentials: {},
              description:
                "Create a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.\n\nCreate a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.",
              lastUpdated: 0,
            },
            recipient: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:29:48.000Z",
            updatedAtBlock: "7177910",
          },
        ],
        anchorAddress: "0x739dba380a2e448d66492a19f1efbec4228834ce",
        canonicalProject: {
          roles: [
            {
              address: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
            },
          ],
        },
      },
      {
        id: "13",
        projectId: "0xbfb3108c07f6078eec1a837d3e1a6a3fef455153d7982f36e7d50a2307a3b78b",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreifvzlaew5it64h5k7vt4kuwmswoyujtd4dsk7hlm6eizee3lmxhce",
        metadata: {
          signature:
            "0x9078ce2fb34416d793b0eaf17a1f46f0058a64a35d9447b2f8ea0a13f8b7a5e7759569aac2f1f57f0dc440f094ec9a3178d7ca975939920a07f0b187763e38f81c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0xbfb3108c07f6078eec1a837d3e1a6a3fef455153d7982f36e7d50a2307a3b78b",
              title: "Fancy Protocol",
              logoImg: "bafkreibphyxfwmbsyz7yne2mxrj4xuejhfuqd25pt4p3rhh6odo2ixl7mi",
              metaPtr: {
                pointer: "bafkreihzxjvcyc26djnmfi5ui6tdbyam5s73ee7p2b34ijyh7spoz6urqq",
                protocol: "undefined",
              },
              website: "https://proto.col",
              bannerImg: "bafkreif55jmzeppdbp64axpyfzd5ie3a4ncyvtvcgbhl77salweajdupse",
              createdAt: 1706182326732,
              credentials: {},
              description:
                "Create a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.\n\nCreate a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.\n\nCreate a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.",
              lastUpdated: 0,
            },
            recipient: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:31:12.000Z",
            updatedAtBlock: "7177917",
          },
        ],
        anchorAddress: "0x0193b4e5d895292ee332fe6b624dd5091d43cf75",
        canonicalProject: {
          roles: [
            {
              address: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
            },
          ],
        },
      },
      {
        id: "14",
        projectId: "0xbfe075166257fda5b915e3dda8be67b44b2db34ddf476841b1e7aa33a5e13db2",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreif5zzwdih6nskotcjeqhw644mlyklql2vfaxwgfsbqckj6qdpagjq",
        metadata: {
          signature:
            "0x5495386555469895ccb62e5955df0fc5771349dddcf4a0ab40dac81bb1c64d2c6776be690f4f6e67826a40775b5e4c7d0ab255f1a36e4eed1c80f37aac6ec2db1c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0xbfe075166257fda5b915e3dda8be67b44b2db34ddf476841b1e7aa33a5e13db2",
              title: "i bims 1canonical project",
              logoImg: "bafkreicj544ax6cqp6djv6wxdhjhnaxlkxoqz3j2t4ovelbpshqqwek5dm",
              metaPtr: {
                pointer: "QmRiSvrAubP1KGhMxRj7TBaQ3ecvipM5N5nyiJDYF5e9dR",
                protocol: "undefined",
              },
              website: "https://edit.test",
              bannerImg: "bafkreigdncuoyfsjiyxnu7fkoz4vpvgmapgtnhpdrh7cfztq24uhuwhcvi",
              createdAt: 1706689434128,
              credentials: {},
              description:
                "Create a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.\n\nCreate a Project\n\nExit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.\n",
              lastUpdated: 0,
            },
            recipient: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:32:12.000Z",
            updatedAtBlock: "7177922",
          },
        ],
        anchorAddress: "0xf490040fc45b7405dd695be07f09125a2e75c7a3",
        canonicalProject: {
          roles: [
            {
              address: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
            },
          ],
        },
      },
      {
        id: "15",
        projectId: "0x05a1ab158427c9d0a777ee5e257c2986671f509bb8507565dd147b52d2df9cb7",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreiag2pbnjz6n7wtmycqvajb5srd6cjpwbdxwwje43qgtpxgojyobii",
        metadata: {
          signature:
            "0x10c4cf4dd2509f4c9663da71681d6eb16853ef5b14a2abe37fde00e41e6321b8764d0dbbb557980736cf335e739f304622400d7bfcb6ce957106313a8f4850301c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x05a1ab158427c9d0a777ee5e257c2986671f509bb8507565dd147b52d2df9cb7",
              title: "Kurts v2 Test Project EDITED - WHOOP",
              logoImg: "bafkreifa6xbq5lbj47lpqqf75jqjln6kfpyhqeedp75q7mbh3kas6oflee",
              metaPtr: {
                pointer: "bafkreidywd4q2flryp5rg6z7xcd44jdmwkxqao33lqkp56aqj23jmdoirq",
                protocol: "undefined",
              },
              website: "https://https://test.ts",
              bannerImg: "bafkreid7hbtuc6ijqwdkr3exh2cq6rmz32genm33l7wlr2yqdusbfvuode",
              createdAt: 1706133254506,
              credentials: {},
              description:
                "Create a Project\n\n# Exit\nProject Details\nTell us more about what you’re working on.\n\nNeed Help? Check out the Builder Guide.",
              lastUpdated: 0,
            },
            recipient: "0xE7eB5D2b5b188777df902e89c54570E7Ef4F59CE",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:35:00.000Z",
            updatedAtBlock: "7177935",
          },
        ],
        anchorAddress: "0x656f2087b0c88370f74d3ed481694c99b7dcc035",
        canonicalProject: {
          roles: [
            {
              address: "0xe7eb5d2b5b188777df902e89c54570e7ef4f59ce",
            },
          ],
        },
      },
      {
        id: "2",
        projectId: "0x19c7d2edfb225469d13291655c29d599fff7ab1b73a7eddd34ecc1e3951623ac",
        chainId: 11155111,
        roundId: "597",
        status: "REJECTED",
        metadataCid: "bafkreidj7lbw44m2bn7jvfgmpb5zhoixqluxwbhxfc2jttfrd6njmvebfe",
        metadata: {
          signature:
            "0x9a193d4791395297b7e599926aed33dfd423bdac573f4367b2e8c5b7c4ef847725d23effc8444eba1cca49e75ae4c60cf0f39846dab0d243c4402bffa135bceb1b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x19c7d2edfb225469d13291655c29d599fff7ab1b73a7eddd34ecc1e3951623ac",
              title: "Hello World",
              logoImg: "bafkreie3vx7ttxmkotqsg75p3yyqzxcjelefl3qyihzraaxnh7maovq2tu",
              metaPtr: {
                pointer: "bafkreidnuwhlxwm6qqcapqxrqd6qfa5ho5ekgiz4gr5wnhm2y3edo3olym",
                protocol: "undefined",
              },
              website: "https://hello.world",
              bannerImg: "bafkreiekpv3dtxaes5jqjd45jmwhsyrrtto6rqwc2yviyekcauegmmntuq",
              createdAt: 1719928034540,
              credentials: {},
              description: "Some random description",
              lastUpdated: 0,
            },
            recipient: "0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T09:19:48.000Z",
            updatedAtBlock: "7169071",
          },
          {
            status: "REJECTED",
            updatedAt: "2024-11-28T14:09:00.000Z",
            updatedAtBlock: "7170428",
          },
        ],
        anchorAddress: "0x98df600f5676cb7b06d4ecd2c7c9df9a866d45a0",
        canonicalProject: {
          roles: [
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
          ],
        },
      },
      {
        id: "3",
        projectId: "0x8d3610fd13ff40515606fbc1466564c7f11b74941dd9739a378ce7c8d5a1f9da",
        chainId: 11155111,
        roundId: "597",
        status: "REJECTED",
        metadataCid: "bafkreicm3jnpszyt4xypfytddzwwme2siodb2p3pl2c6w6f5dpemgj5fui",
        metadata: {
          signature:
            "0x550683581840386239ac8083541561cd8f07799865a9f2485e9823eba33f20810f45a0c574364bf615532e19e063b889c38d9683ca9d26d52704a4f509e3efcd1b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x8d3610fd13ff40515606fbc1466564c7f11b74941dd9739a378ce7c8d5a1f9da",
              title: "Uni Corn 🌽",
              logoImg: "bafkreiazs4hmxmlg37n2xsctez6nwpxi323pak2shek6lj2fqbt2cksdvu",
              metaPtr: {
                pointer: "bafkreicjoebgoh6aaopgklqllcdfp2wzorsdsouh5oxakt4tb2s4vhtdpe",
                protocol: "undefined",
              },
              website: "https://uni.corn",
              bannerImg: "bafkreiet7e2d7zjvajzb6u7tkpwotgvty2g2yaklume2quw7cp3bdeuhpe",
              createdAt: 1711023991589,
              userGithub: "0xKurt",
              credentials: {
                github: {
                  type: ["VerifiableCredential"],
                  proof: {
                    jws: "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..JBwNUeJVu_aWHYCEnnUm_7u47WoADQMBZ7l7pgUklKqvBK3ugh09q3L4owu11Y7B8CQsu4rfcPioJnqdGKa1BA",
                    type: "Ed25519Signature2018",
                    created: "2024-04-20T05:33:39.773Z",
                    proofPurpose: "assertionMethod",
                    verificationMethod:
                      "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC#z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
                  },
                  issuer: "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
                  "@context": ["https://www.w3.org/2018/credentials/v1"],
                  issuanceDate: "2024-04-20T05:33:39.773Z",
                  expirationDate: "2024-07-19T05:33:39.773Z",
                  credentialSubject: {
                    id: "did:pkh:eip155:1:0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
                    hash: "v0.0.0:mW9x968bbmCJLjefqGWnTHm5w7PoZSMtd+avxdQiGCk=",
                    "@context": [
                      {
                        hash: "https://schema.org/Text",
                        provider: "https://schema.org/Text",
                      },
                    ],
                    provider: "ClearTextGithubOrg#gitcoinco#22886639",
                  },
                },
                twitter: {
                  type: ["VerifiableCredential"],
                  proof: {
                    jws: "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..IYtGDmEFqNH0hyJpv-S175-Vq9E-A4TBmaiW6NESV7rD2LjXrbp9WRfUzFSpFUvcPxnF7p1-etBm8DdxQJCUCA",
                    type: "Ed25519Signature2018",
                    created: "2024-04-20T05:33:27.021Z",
                    proofPurpose: "assertionMethod",
                    verificationMethod:
                      "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC#z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
                  },
                  issuer: "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
                  "@context": ["https://www.w3.org/2018/credentials/v1"],
                  issuanceDate: "2024-04-20T05:33:27.021Z",
                  expirationDate: "2024-07-19T05:33:27.021Z",
                  credentialSubject: {
                    id: "did:pkh:eip155:1:0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
                    hash: "v0.0.0:CGfxIGbX95UJQ88c5YgBCRECV2w9sfmyFMLpEaYR66w=",
                    "@context": [
                      {
                        hash: "https://schema.org/Text",
                        provider: "https://schema.org/Text",
                      },
                    ],
                    provider: "ClearTextTwitter#_kurtme",
                  },
                },
              },
              description:
                "## Unveiling the Magic of Uni Corn\n\nWelcome to Uni Corn, where magic meets technology in the vast landscape of Web3! 🌈✨\n\nAt Uni Corn, we've embarked on an enchanting journey to blend the mystical charm of unicorns with the wholesome essence of corn. Imagine a world where blockchain technology intertwines seamlessly with the whimsical aura of mythical creatures, offering a truly unique and enchanting experience.\n\n### Embrace the Magic\n\nStep into a realm where innovation thrives and imagination knows no bounds. Uni Corn is not just a project; it's a portal to a realm where dreams come alive and possibilities are endless. Our magical logo, featuring the majestic unicorn crowned with a crown of corn, symbolizes the fusion of innovation and imagination that defines Uni Corn.\n\n### Harnessing the Power of Web3\n\nAt Uni Corn, we harness the power of Web3 to create decentralized applications (DApps) that transcend the ordinary and venture into the extraordinary. Our team of wizards and technologists work tirelessly to build a blockchain ecosystem where transparency, security, and innovation reign supreme.\n\n### Join the Uni Corn Community\n\nAre you ready to embark on this magical journey with us? Join our vibrant community of dreamers, creators, and believers in the power of magic and technology. Together, we'll explore new horizons, unlock hidden potentials, and pave the way for a future where unicorns roam freely and cornfields stretch as far as the eye can see.\n\n### Let the Magic Begin!\n\nStep into the world of Uni Corn and experience the magic of Web3 like never before. Whether you're a blockchain enthusiast, a unicorn aficionado, or simply curious about the wonders of technology, there's a place for you in our mystical realm. Let your imagination run wild, and let the magic of Uni Corn ignite your senses.\n\nAre you ready to embark on this extraordinary adventure? Join us at Uni Corn and witness the fusion of magic and technology unfold before your very eyes. Let's make the impossible possible and create a future where dreams become reality. Welcome to Uni Corn – where magic happens, one blockchain at a time. 🦄🌽",
              lastUpdated: 0,
              projectGithub: "gitcoinco",
              projectTwitter: "_kurtme",
            },
            recipient: "0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T09:22:48.000Z",
            updatedAtBlock: "7169083",
          },
          {
            status: "REJECTED",
            updatedAt: "2024-11-28T14:09:00.000Z",
            updatedAtBlock: "7170428",
          },
        ],
        anchorAddress: "0xe5023547991f22274f171f0cf0a88f69b178bb6d",
        canonicalProject: {
          roles: [
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
          ],
        },
      },
      {
        id: "4",
        projectId: "0x06ce1a0439eaf1234b0b435bb23d2a70e5c7dad7b0461408beaa7dbbfdabe297",
        chainId: 11155111,
        roundId: "597",
        status: "REJECTED",
        metadataCid: "bafkreiegudkfyzmbk5oj7g2af2aaipymcf6gf3ae3i7hyuzdlmb74gv2jm",
        metadata: {
          signature:
            "0x4b24ad3594a94e644273be673c3d5c0cadb3969e07bee8e387b8611ae046bdbf2fec4eea86ccd9a8965f6251ab22d8f62c23932ec171d2911c1e888132eeb3661c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x06ce1a0439eaf1234b0b435bb23d2a70e5c7dad7b0461408beaa7dbbfdabe297",
              title: "frwedvc",
              metaPtr: {
                pointer: "bafkreifwcczkazvjvtbixpj6rgjwlo67bylgzpry4sjyjnjvjz3ks33nku",
                protocol: "undefined",
              },
              website: "https://SDXSDXS.COM",
              createdAt: 1723450311486,
              credentials: {},
              description: "vef",
              lastUpdated: 0,
            },
            recipient: "0x044B595C9b94A17Adc489bD29696af40ccb3E4d2",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T14:17:36.000Z",
            updatedAtBlock: "7170471",
          },
          {
            status: "REJECTED",
            updatedAt: "2024-11-28T15:57:36.000Z",
            updatedAtBlock: "7170949",
          },
        ],
        anchorAddress: "0x741bba71ab5f667b1f1abc5c64f24289aac26cf2",
        canonicalProject: {
          roles: [
            {
              address: "0x0d1781f0b693b35939a49831a6c799b938bd2f80",
            },
          ],
        },
      },
      {
        id: "5",
        projectId: "0x29ad9573b3d2bc9b75d44f89cd571103d50d5a06499499282d153d1187952923",
        chainId: 11155111,
        roundId: "597",
        status: "APPROVED",
        metadataCid: "bafkreifcfgg2o4v2ujpgl6ir6tab2al6hqu3uwljbzd7aoeichhrrr5tnq",
        metadata: {
          signature:
            "0x7c78a61c8ca4adaeb7a8ca1908c75a5bd07c0464c32e711161b102a5ff133ac95ce944b301cce35134de7b5d0ae4ba424f349e073293f6e3d704aa10797467a71b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x29ad9573b3d2bc9b75d44f89cd571103d50d5a06499499282d153d1187952923",
              title: "testing new lit",
              metaPtr: {
                pointer: "bafkreihb6dp2s63uhsstalqsm7qnrg6hr7uy3avkctcrjcexw64wohyyvm",
                protocol: "undefined",
              },
              website: "https://SDXSDXS.COM",
              createdAt: 1723539781667,
              credentials: {},
              description: "fvc",
              lastUpdated: 0,
            },
            recipient: "0x044B595C9b94A17Adc489bD29696af40ccb3E4d2",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T14:19:00.000Z",
            updatedAtBlock: "7170478",
          },
          {
            status: "APPROVED",
            updatedAt: "2024-11-29T07:53:12.000Z",
            updatedAtBlock: "7175465",
          },
        ],
        anchorAddress: "0x9af6aad853b1f1f2908551c3e28c49ccc79cc765",
        canonicalProject: {
          roles: [
            {
              address: "0x0d1781f0b693b35939a49831a6c799b938bd2f80",
            },
          ],
        },
      },
      {
        id: "6",
        projectId: "0x9e291f204f6e07e10bbf6b618f3e5aaced7d55ea80963ae1308c50701efcf0e0",
        chainId: 11155111,
        roundId: "597",
        status: "APPROVED",
        metadataCid: "bafkreigcv5aej22bmx6sdtpptbr7vlgstukvgacxewyolgz6uygmrrx4ga",
        metadata: {
          signature:
            "0x0c65c9db452f158f4c6f2acffe7d5e7cf0ae8dc076334ff99539a9b78eebe456395bd47cc24549e5d84b165e5677447c7cf7604b1d154ee6119f1ba7a5134ea61c",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x9e291f204f6e07e10bbf6b618f3e5aaced7d55ea80963ae1308c50701efcf0e0",
              title: "My Super dope project on Gnosis",
              logoImg: "bafkreiezicjt4lcelh64c2cza7blbliyacy2ppi6s23oq7qbdz3iu5ywau",
              metaPtr: {
                pointer: "bafkreigqo3sppzdvaoh2nn35kqgurv7ctbx3wjhirz2g4me2ffxo2mq64e",
                protocol: "undefined",
              },
              website: "https://super.dope",
              bannerImg: "bafkreiehgzwzgoit64rip2vtvkgk7o5t6gpavf6m6capwmgq25x76nt4au",
              createdAt: 1726136800253,
              credentials: {},
              description: "be awesome :)",
              lastUpdated: 0,
            },
            recipient: "0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-28T14:19:48.000Z",
            updatedAtBlock: "7170482",
          },
          {
            status: "APPROVED",
            updatedAt: "2024-11-28T14:52:24.000Z",
            updatedAtBlock: "7170639",
          },
        ],
        anchorAddress: "0x697a6cdd40b0bf7ce3ec818225f584ae5c48a573",
        canonicalProject: {
          roles: [
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
          ],
        },
      },
      {
        id: "7",
        projectId: "0x12ab0bc22652005d71c6ab275b9f4403e972f806222167b45e6fd913a77ec25b",
        chainId: 11155111,
        roundId: "597",
        status: "REJECTED",
        metadataCid: "bafkreia7x3czst4yzjwu4aqnc6u77f3ll4q7ppsbtu6itg5u6dk2b7b4xu",
        metadata: {
          signature:
            "0x37842d1a2dad4cd49889a80211063c40b4a0a3fe6e661718a322e8b259c2c4f143286966ab981be31d19490bfe55b752c80c39a9424a991284a0db83f4b123c21b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0x12ab0bc22652005d71c6ab275b9f4403e972f806222167b45e6fd913a77ec25b",
              title: "Kit Fix",
              metaPtr: {
                pointer: "bafkreibluucurs5rvsd2hciczv63ykzrhlw6xu625lbwrjrz4otqbma5nu",
                protocol: "undefined",
              },
              website: "https://pop.com",
              createdAt: 1718355418126,
              credentials: {},
              description: "jknfjwkndk qe qkjwe qkjw e ke kqjw ekqweqwe",
              lastUpdated: 0,
            },
            recipient: "0xB8cEF765721A6da910f14Be93e7684e9a3714123",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T07:49:48.000Z",
            updatedAtBlock: "7175448",
          },
          {
            status: "REJECTED",
            updatedAt: "2024-12-02T10:55:12.000Z",
            updatedAtBlock: "7195597",
          },
        ],
        anchorAddress: "0x3b6a76df677df5489499ae8f67b07ed33a491dbb",
        canonicalProject: {
          roles: [
            {
              address: "0xb8cef765721a6da910f14be93e7684e9a3714123",
            },
          ],
        },
      },
      {
        id: "8",
        projectId: "0xcc7dffb9b30d0b95aa24c23604cf5e0921ee83b1d43b4be87a9ec7a429cdc16e",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreid2bhszojisejd7uyaoxseb5f3uplmj4azxj7lnu7f6mtoszw5rmu",
        metadata: {
          signature:
            "0x6f533bb43e1f3482d3d9552a87d62808bc6d04774be3a5cae49b1d111f4a63b14946f2a440f283063475da9d2417a039039b93083841ae5861b36541042b62e51b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0xcc7dffb9b30d0b95aa24c23604cf5e0921ee83b1d43b4be87a9ec7a429cdc16e",
              title: "The day after dependency updates",
              logoImg: "bafkreief7xplad32juidncotavrksal76gefr66zxq6g7ctgylqzs7mi6i",
              metaPtr: {
                pointer: "bafkreifz5b5xtbqeesnybvsgvfrmmtykqb7jtnayhv42zftytnl724ueqy",
                protocol: "undefined",
              },
              website: "https://yyy.yy",
              bannerImg: "bafkreifmzxf4e2gac5gaabbzrjuliclseh3d77qgv4qfbcmk5kor6r7zha",
              createdAt: 1718185991149,
              credentials: {},
              description: "Wow, what a nice description.",
              lastUpdated: 0,
            },
            recipient: "0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:04:36.000Z",
            updatedAtBlock: "7177792",
          },
        ],
        anchorAddress: "0xfc024a01c5f837d7ff5164d541e6ec350a7eeff2",
        canonicalProject: {
          roles: [
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
          ],
        },
      },
      {
        id: "9",
        projectId: "0xdba27ceab70f958b580d32a7e39ecaa708a9de71df5a6e2ee29d1ecfc360a64e",
        chainId: 11155111,
        roundId: "597",
        status: "PENDING",
        metadataCid: "bafkreietn7rnrbi2wsch4s7hd4qxsqzfmdvzkfommswounabo7vfm3b3cm",
        metadata: {
          signature:
            "0xeacc1a45a6e82dcb16ec1d816f9b4e036f324fa713b4149a3225572d897e7ef20eecc06ab089e35155707e2c6d1c97863c66c6e1ef2d9a2765405f54fce8ae2a1b",
          application: {
            round: "0xc5a0a4d4b0c46fc430362377d3d11a23bad4a645",
            answers: [],
            project: {
              id: "0xdba27ceab70f958b580d32a7e39ecaa708a9de71df5a6e2ee29d1ecfc360a64e",
              title: "Hello Lukso",
              metaPtr: {
                pointer: "bafkreidawq33473thqnpan2by7xckhjylwzju4t22a36mxgmllfjge2gza",
                protocol: "undefined",
              },
              website: "https://hello-luk.so",
              createdAt: 1724945275247,
              credentials: {},
              description: "What is my project about?",
              lastUpdated: 0,
            },
            recipient: "0x5645bF145C3f1E974D0D7FB91bf3c68592ab5012",
          },
        },
        distributionTransaction: null,
        statusSnapshots: [
          {
            status: "PENDING",
            updatedAt: "2024-11-29T16:24:36.000Z",
            updatedAtBlock: "7177885",
          },
        ],
        anchorAddress: "0xc482ead44a5ba21b419eaa352bfdaee04592c0f1",
        canonicalProject: {
          roles: [
            {
              address: "0x5645bf145c3f1e974d0d7fb91bf3c68592ab5012",
            },
          ],
        },
      },
    ],
    round: {
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
      roles: [
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
      project: {
        id: "0x107879486cfb4f5e6284033fbe11a3cfd6bb447a119f15729cd8e3fc8ca8aff5",
      },
    },
  },
};
