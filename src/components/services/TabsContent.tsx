import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"

const TabsContent = ({ step }: { step: string }): JSX.Element => {
    switch (step) {
        case "Step 1":
            return <Step1 />
        case "Step 2":
            return <Step2 />
        case "Step 3":
            return <Step3 />
        default:
            return <Step1 />
    }
}

export default TabsContent
