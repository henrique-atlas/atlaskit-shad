import * as React from "react"
import { GeneralInformation } from "./GeneralInformation"
import { Header } from "@/layout/header/Header"
import { SubHeader } from "@/layout/sub-header/SubHeader"
import TabsLgBasic from "@/layout/tabs/Tabs"
import { Sidebar } from "@/layout/sidebar/Sidebar"

const tabNames = [
  'General Information',
  'Account Contact',
  'Documents'
]
const tabContent = [
  <GeneralInformation />,
  <p>
  One must be entirely sensitive to the structure of the material
  that one is handling. One must yield to it in tiny details of
  execution, perhaps the handling of the surface or grain, and one
  must master it as a whole.
</p>
]

export const CompanyOverview = () => (
  <section>
    <Header />
    <div className="flex pt-1 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-1 dark:bg-gray-900">
        <main>
          <SubHeader />
          <TabsLgBasic tabContent={tabContent} tabNames={tabNames} />
        </main>

      </div>
    </div>
  </section>
)