import React from 'react';

const InfoSection = () => {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto space-y-12">

      {/* 1. MAIN HEADING CARD */}
      <div className="rounded-3xl border-[3px] border-yellow-500 bg-zinc-900 p-8 text-center shadow-[0_0_40px_rgba(234,179,8,0.15)] transform transition-hover hover:scale-[1.01]">
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight text-yellow-500 tracking-tighter">
          Reddy Anna Book <br />
          <span className="text-white text-2xl md:text-3xl font-bold">Official Cricket Betting ID Platform</span>
        </h2>
      </div>

      {/* 2. SUB-HEADING */}
      <div className="rounded-2xl border border-yellow-500/50 bg-zinc-900/50 py-4 px-4 text-center">
        <h3 className="text-lg md:text-xl font-black uppercase text-yellow-400 tracking-widest">
          🏆 No.1 Secured Online Betting ID Provider
        </h3>
      </div>

      {/* 3. BODY TEXT - SPLIT FOR READABILITY */}
      <div className="space-y-8 px-2 text-center text-gray-300">
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="text-white text-2xl font-black italic mr-2">Reddy Anna</span> 
            is India's premier secured online betting platform and trusted betting ID provider since 2010. 
            We are a reliable agent offering verified cricket and casino IDs, giving you access to 
            multiple exchanges for live sports, IPL, and high-stakes wagering.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Our platform is built for international enthusiasts, ensuring a 
            <span className="text-yellow-500 font-bold"> mobile-friendly interface </span> 
            with 24/7 WhatsApp support. Existing players can use our fast-login system 
            to start betting instantly.
          </p>
        </div>

        {/* Highlighted Feature Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-gray-800">
            <p className="text-yellow-500 font-black uppercase text-sm mb-2">Support</p>
            <p className="text-white font-medium">24/7 Personalized assistance via WhatsApp & Telegram.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-gray-800">
            <p className="text-yellow-500 font-black uppercase text-sm mb-2">Payments</p>
            <p className="text-white font-medium">Instant UPI, Bank Transfer, Paytm, & Google Pay.</p>
          </div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed">
          The Reddy Anna cricket ID is simple, secure, and easy to use. Once you create your 
          ID number, simply log in, add funds to your wallet, and enjoy 
          <span className="text-white font-bold"> instant deposits and fast withdrawals</span>. 
          New players can contact our agents for a <strong>Demo ID</strong> to explore the 
          platform before starting.
        </p>

        {/* Footer Tagline */}
        <div className="pt-6 border-t border-gray-800">
          <p className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-yellow-500">
            Get Instant Cricket ID | 24/7 WhatsApp Support | Trusted Provider
          </p>
        </div>
      </div>

    </section>
  );
};

export default InfoSection;


/*
import React from 'react';

const InfoSection = () => {
  return (
    <section className="px-4 py-12 space-y-10">

      <div className="rounded-3xl border-[3px] border-yellow-500 bg-[#1e293b] p-8 text-center shadow-[0_0_30px_rgba(234,179,8,0.2)]">
        <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight text-yellow-500 tracking-tighter">
          Reddy Anna Book Official Reddy Anna Cricket Betting ID Platform <br />
        </h2>
      </div>

      <div className="rounded-2xl border border-yellow-500 bg-[#1e293b] py-6 px-4 text-center shadow-lg">
        <h3 className="text-xl md:text-2xl font-black uppercase text-yellow-500 tracking-normal">
          No.1 Secured Online Betting ID Provider
        </h3>
      </div>

      <div className="space-y-10 px-2 text-center text-gray-100">

        <p className="text-lg md:text-xl leading-relaxed font-medium">
          <strong className="text-white text-2xl mb-2 font-black italic">Reddy Anna </strong>
          is one of the top secured online betting platform as well as a trusted betting ID provider Since
          2010. We are a reliable Reddy Anna agent offering verified Reddy Anna cricket ID’s & Casino
          ID’s that allow access to multiple online betting exchanges to play live cricket betting, fantasy
          sports, IPL betting, casino games, and high-stakes wagering options. We specialize in online
          betting cricket and international sports markets, ensuring a completely mobile friendly
          interface with 24/7 Whtaspp support.<br /><br />ReddyAnna trusted betting platform
          is premier online bettting exchange for high-stake bettors, and international
          cricket enthusiasts for safe online betting. As a Existing players you, can directly
          fast log in Reddy Anna platform and start online betting.<br /><br />
          Get personalized 24/7 customer support through WhatsApp and Telegram for quick and responsive assistance.<br /><br />
          We, Reddy Anna Book is an online betting platform that also provides Instant betting ID’s to access to popular regional
          games like Teen Patti and Andar Bahar. The Reddy Anna cricket ID is simple, secure, and
          easy to use. Once you create your Reddy Anna ID number, log in to your verified betting
          account, add funds to your wallet, place your bets, and enjoy instant deposit and fast
          withdrawal processing with flexible Indian Encrypted payment methods (UPI, Bank transfer,
          Paytm, Google pay).<br /><br />
          Create your Reddy anna Book account through WhatsApp and place bets on Indian Premier League (IPL) cricket matches, tennis betting, football betting, and play live dealer casino games like roulette and blackjack. Manage your high-volume bets smoothly with a Reddy Anna ID.
          If you are a New player at Reddy Anna , Contact Reddy Anna agent and Get Reddy Anna Demo ID and Start online betting.<br/><br/>
          Get Instant Cricket ID | 24/7 WhatsApp Support | Trusted Betting ID Provider
        </p>*/


{/* 
        <div className="relative py-8 px-4 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent border-y border-yellow-500/30">
          <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-yellow-400">
            Access live cricket betting, fantasy sports, IPL betting, and high-stakes wagering options.
          </p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed font-medium">
          We specialize in online betting cricket and international sports markets, ensuring a completely <span className="text-yellow-500 font-extrabold underline decoration-2 underline-offset-4">mobile friendly interface</span> with 24/7 Whatsapp support.
        </p> */}

        {/* <div className="bg-[#1e293b] rounded-2xl p-6 border border-gray-800">
          <p className="text-xl font-bold text-white mb-2 uppercase">
            Get personalized <span className="text-yellow-500">24/7 support</span>
          </p>
          <p className="text-gray-400 text-sm uppercase tracking-[0.2em]">Through WhatsApp and Telegram</p>
        </div>

        <p className="text-lg md:text-xl leading-relaxed font-medium">
          The Reddy Anna cricket ID is <span className="text-white font-black uppercase">simple, secure, and easy</span> to use. Once you create your ID, enjoy instant deposit and fast withdrawal processing with flexible Indian payment methods.
        </p> */}

        /*
      </div>

    </section>
  );
};

export default InfoSection;*/