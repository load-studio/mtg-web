import { configurationDocs } from "@/data/docs/configuration"
import { customContentDocs } from "@/data/docs/custom-content"
import { gettingStartedDocs } from "@/data/docs/getting-started"
import { referenceDocs } from "@/data/docs/reference"
import { tutorialDocs } from "@/data/docs/tutorials"

export const docs = [
  ...gettingStartedDocs,
  ...configurationDocs,
  ...customContentDocs,
  ...tutorialDocs,
  ...referenceDocs,
]
