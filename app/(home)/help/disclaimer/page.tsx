const Disclaimer = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col items-center gap-12 px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-semibold md:text-5xl">
          Safe Harbour & Disclaimer
        </h1>
        <div className="text-center text-xs text-themeLightGrey">
          Last Update: 26th December, 2023
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          The information presented on this website by CryptoGrad is intended
          solely for informational purposes. It is not a substitute for
          professional advice in financial, legal, or tax matters. Users are
          strongly encouraged to consult independent financial or legal
          professionals before making any decisions based on the information
          obtained from this site.
        </p>
        <p>
          CryptoGrad makes no guarantees regarding the accuracy, completeness,
          or timeliness of the content provided on this website. It is crucial
          to recognise that cryptocurrencies and virtual assets are inherently
          speculative, volatile, and subject to market risks.
        </p>
        <p>
          CryptoGrad, its affiliates, and their officers, directors, employees,
          agents, or representatives disclaim any liability for decisions or
          actions taken based on the content of this site, and they are not
          responsible for any resulting damages.
        </p>
        <p>
          Third-party links provided on this website are for convenience and
          informational purposes only. CryptoGrad does not endorse or approve
          these links.
        </p>
        <p>
          Forward-looking statements featured on this website are based on
          current projections and assumptions. Actual outcomes may vary
          significantly due to various factors.
        </p>
        <p>
          Perform your own research and seek professional guidance before making
          financial decisions. By using this website, you acknowledge and accept
          this disclaimer.
        </p>
        <p>
          CryptoGrad retains the right to update or modify this disclaimer as
          needed.
        </p>
      </div>
    </div>
  )
}

export default Disclaimer
