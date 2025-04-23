"use client";

import { useState, useEffect } from "react";

import { verifyCredentials } from "@gitcoin/services/checker";
import { ProjectApplicationForManager } from "@gitcoin/types";

export function useCredentialVerification(
  application: Partial<ProjectApplicationForManager> | undefined,
) {
  const [isTwitterVerified, setIsTwitterVerified] = useState<boolean>(false);
  const [isGithubVerified, setIsGithubVerified] = useState<boolean>(false);

  useEffect(() => {
    async function checkVerification() {
      if (application) {
        try {
          const { twitter, github } = await verifyCredentials(application);
          setIsTwitterVerified(twitter);
          setIsGithubVerified(github);
        } catch (error) {
          console.error("Failed to verify credentials:", error);
        }
      }
    }

    checkVerification();
  }, [application]);

  return { isTwitterVerified, isGithubVerified };
}
