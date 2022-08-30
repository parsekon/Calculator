import blocknot from "./blocknot"
import provider from "./provider";

const blocknotWithSigner = () => {
    const signer = provider.getSigner();
    console.log("signer", signer)
    return blocknot.connect(signer);
}

export default blocknotWithSigner;