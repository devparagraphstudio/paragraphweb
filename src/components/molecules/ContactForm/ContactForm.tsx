"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Input, Button, Label } from "@/components/ui";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactForm = () => {
    const t = useTranslations("contact");
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });

    // Update form state on change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Form validation effect
    useEffect(() => {
        const { name, email, phone, company, message } = formData;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const allFilled = Boolean(name && email && phone && company && message);
        setIsFormValid(allFilled && isEmailValid);
    }, [formData]);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;

        const honeypot = form?.["website"]?.value;
        if (honeypot) {
            console.warn("Bot detected — form blocked.");
            return;
        }

        setIsSending(true);

        emailjs.sendForm(
            "overty",
            "template_e9xw2po",
            form!,
            "BtyN8OJ8FinYLVXSI"
        ).then(() => {
            toast(t("SendSuccess"), {
                style: {
                    borderRadius: "0px",
                    border: "none",
                    fontWeight: "300",
                    fontSize: "14px",
                    fontFamily: "DM Mono",
                    color: "#525252",
                    background: "#fafa00",
                    width: "fit-content",
                    textWrap: "nowrap",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }
            })
            setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        }).catch((err) => {
            console.error("Error sending message:", err);
            alert(t("SendError"));
        }).finally(() => {
            setIsSending(false);
        });
    };

    return (
        <section className="w-full bg-transparent text-black flex items-center justify-between relative overflow-visible">
            <div className="relative z-10 flex flex-col md:flex-row justify-between w-full overflow-visible">
                <div className="w-full md:w-1/2">

                </div>

                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col justify-end w-full md:w-1/2 gap-10 bg-transparent overflow-visible"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}

                >
                    {/* Honeypot field – hidden */}
                    <input
                        type="text"
                        name="website"
                        className="hidden"
                        autoComplete="off"
                        tabIndex={-1}
                    />

                    {/* Real inputs */}
                    {[
                        { id: "name", label: t("Name"), placeholder: t("NamePlaceholder") },
                        { id: "email", label: t("Email"), placeholder: t("EmailPlaceholder") },
                        { id: "phone", label: t("Phone"), placeholder: t("PhonePlaceholder") },
                        { id: "company", label: t("Company"), placeholder: t("CompanyPlaceholder") }
                    ].map(({ id, label, placeholder }, index) => (
                        <motion.div
                            className="flex flex-col gap-6"
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <Label htmlFor={id} className="text-base font-medium pl-[10px]">
                                {label} <sup className="text-red-500 text-base">*</sup>
                            </Label>
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileFocus={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-visible"
                            >
                                <Input
                                    id={id}
                                    name={id}
                                    value={formData[id as keyof typeof formData]}
                                    onChange={handleChange}
                                    required
                                    className="h-[60px] rounded-none text-base border-black border-3 transition-all duration-300 hover:border-gray-600 focus:border-gray-600"
                                    placeholder={placeholder}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                            ease: "easeOut"
                        }}
                    >
                        <Label htmlFor="message" className="text-base font-medium pl-[10px]">
                            {t("Message")} <sup className="text-red-500 text-base">*</sup>
                        </Label>
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-visible"
                        >
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full h-[120px] rounded-none text-base border-black border-3 p-3 resize-none focus:outline-none focus:border-3 transition-all duration-300 hover:border-gray-600 focus:border-gray-600"
                                placeholder={t("MessagePlaceholder")}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-row justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                            ease: "easeOut"
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                type="submit"
                                className={`bg-black text-white h-11 w-[220px] px-8 py-2 rounded-none uppercase tracking-[0.24em] transition-all duration-300 ${!isFormValid ? "cursor-not-allowed hover:bg-black" : "hover:cursor-pointer hover:bg-black/80"}`}
                            >
                                {isSending ? (
                                    <motion.span
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        />
                                        {t("Sending")}
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {t("Send")}
                                    </motion.span>
                                )}
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;
