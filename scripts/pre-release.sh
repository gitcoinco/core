#!/bin/bash

if [ $# -gt 1 ]; then
    echo "Error: Too many arguments"
    echo "Usage: pnpm changeset:pre <tag>"
    echo "Example:"
    echo "  pnpm changeset:pre beta"
    echo "  pnpm changeset:pre alpha"
    echo "  pnpm changeset:pre next"
    echo ""
    echo "If no tag is provided, 'next' will be used as default"
    exit 1
fi

TAG=${1:-next}

if [ "$TAG" = "--help" ] || [ "${TAG#-}" != "$TAG" ]; then
    echo "Usage: pnpm changeset:pre <tag>"
    echo "Example:"
    echo "  pnpm changeset:pre beta"
    echo "  pnpm changeset:pre alpha"
    echo "  pnpm changeset:pre next"
    echo ""
    echo "If no tag is provided, 'next' will be used as default"
    exit 1
fi

changeset pre enter $TAG && changeset