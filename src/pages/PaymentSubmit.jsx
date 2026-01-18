import React, { useState } from 'react';
import { ShieldCheck, Send, Smartphone, Hash, IndianRupee, Image as ImageIcon, Loader2, User, Mail } from 'lucide-react';
import { track } from '@vercel/analytics';

const PaymentSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // --- CONFIGURATION START ---
  // Ends with /formResponse for silent submission
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScye5XIjlsd93BUNbb_utN3ykvurjcGuVLm6DCbE1oyPY4B1w/formResponse";

  const ENTRY_IDS = {
    phone: "entry.1749393479",    
    email: "entry.1999562536",    
    txnId: "entry.1187860160",    
    amount: "entry.1947745303",   
    imageUrl: "entry.291225935"   
  };

  const CLOUDINARY_PRESET = "betting-site";
  const CLOUDINARY_NAME = "dw7mit7cp";
  // --- CONFIGURATION END ---

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      return data.secure_url; 
    } catch (err) {
      console.error("Cloudinary Error:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const imageFile = formData.get("screenshot_file");

    const uploadedUrl = await uploadToCloudinary(imageFile);

    if (!uploadedUrl) {
      alert("Image upload failed. Check your Cloudinary settings.");
      setLoading(false);
      return;
    }

    const googleFormData = new FormData();
    // Corrected Mapping: formData.get names must match the 'name' attribute in the <input> tags below
    googleFormData.append(ENTRY_IDS.phone, formData.get("user_name"));
    googleFormData.append(ENTRY_IDS.email, formData.get("user_email"));
    googleFormData.append(ENTRY_IDS.amount, formData.get("user_amount"));
    googleFormData.append(ENTRY_IDS.txnId, formData.get("user_txn"));
    googleFormData.append(ENTRY_IDS.imageUrl, uploadedUrl);

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors", 
        body: googleFormData
      });
      setSubmitted(true);
      track('Official Support Request', { type: 'Payment Submission' });
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] pt-24 pb-12 px-6 flex flex-col items-center font-sans">
      <div className="max-w-md w-full">

        {submitted ? (
          <SuccessMessage onReset={() => setSubmitted(false)} />
        ) : (
          <>
            <div className="text-center mb-10">
              <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                OFFICIAL <span className="text-yellow-500">SUPPORT</span>
              </h1>
              <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-2">
                — Secure Transaction Verification —
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#1e293b] rounded-3xl p-8 shadow-2xl border border-gray-800 space-y-5">
              <FormInput icon={<User size={18} />} label="Full Name" name="user_name" placeholder="John Doe" type="text" />
              <FormInput icon={<Mail size={18} />} label="Email Address" name="user_email" placeholder="john@example.com" type="email" />
              <FormInput icon={<IndianRupee size={18} />} label="Deposit Amount" name="user_amount" placeholder="Min ₹500" type="number" />
              <FormInput icon={<Hash size={18} />} label="Transaction ID / UTR" name="user_txn" placeholder="12-digit Number" type="text" />

              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Payment Screenshot</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"><ImageIcon size={18} /></div>
                  <input
                    required
                    name="screenshot_file"
                    type="file"
                    accept="image/*"
                    className="w-full rounded-xl bg-[#0f172a] py-4 pl-12 pr-4 text-xs font-bold border border-gray-800 text-gray-400 file:mr-4 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[10px] file:font-black file:bg-yellow-500 file:text-black cursor-pointer"
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className={`w-full rounded-xl py-4 text-sm font-black uppercase text-black shadow-lg transition-all flex items-center justify-center gap-3 ${loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-400 active:scale-95'}`}
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                {loading ? "Verifying Details..." : "Submit to Support"}
              </button>

              <p className="text-[9px] text-center text-gray-500 font-bold uppercase tracking-wider px-2 leading-relaxed">
                By submitting, you agree to official verification. Fraudulent UTRs will result in a permanent ban.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const FormInput = ({ icon, label, name, placeholder, type }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black text-gray-500 uppercase ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{icon}</div>
      <input required name={name} type={type} placeholder={placeholder} className="w-full rounded-xl bg-[#0f172a] py-4 pl-12 pr-4 text-sm font-bold border border-gray-800 focus:border-yellow-500 outline-none text-white transition-all" />
    </div>
  </div>
);

const SuccessMessage = ({ onReset }) => (
  <div className="text-center bg-[#1e293b] p-10 rounded-3xl border border-green-500/30">
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-4">
      <ShieldCheck className="text-green-500" size={32} />
    </div>
    <h2 className="text-2xl font-black text-white italic uppercase">Submission Success</h2>
    <p className="text-gray-400 mt-2 text-sm leading-relaxed">Your details and screenshot have been sent to our official verification sheet. Check your account in 15 mins.</p>
    <button onClick={onReset} className="mt-8 text-yellow-500 text-[10px] font-black uppercase tracking-widest border border-yellow-500/20 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-all">Submit Another</button>
  </div>
);

export default PaymentSubmit;