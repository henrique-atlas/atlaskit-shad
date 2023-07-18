import { Input } from "@/components/ui/input"

export const GeneralInformation = () => (
  <>
    {/*<!-- Component: Four columns even layout --> */}
    <section>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-3">
            <label>Customer Legal Name</label>
            <Input placeholder="Customer Legal Name" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <label>Customer DBA</label>
            <Input placeholder="Customer DBA" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <label>Tax ID/Registration Number</label>
            <Input placeholder="Tax ID/Registration Number" />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <label>Tax ID/Registration Number</label>
            <Input placeholder="Tax ID/Registration Number" />
          </div>
        </div>
      </div>
    </section>
    {/*<!-- End Four columns even layout --> */}
  </>
)