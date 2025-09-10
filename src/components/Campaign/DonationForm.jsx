'use client';
import React from "react";
import * as yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const getSchema = () => 
  yup
  .object({
    donation_amount: yup
    .number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? undefined : Number(originalValue)
    )
    .nullable()
    .notRequired()
    .test(
      'donation-amount-check',
      'Minimum Amount should be Rs. 500/-',
      (value) => {
        if (value === undefined || value === null) return true;
        return value >= 500;
      }
    ),
    full_name: yup.string().required().label("Full Name"),
    emailid: yup.string().required().email().label("Email ID"),
    phone: yup.string()
         .required('Phone number is required')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
    form_80G: yup.string().required(),
    pan: yup.string().when("form_80G", (form_80G, schema) => form_80G[0] === "1" 
         ? schema.required("PAN is required for 80G receipt") 
         : schema.notRequired()
    ),
    address: yup.string().when("form_80G", (form_80G, schema) => form_80G[0] === "1" 
         ? schema.required("Address is required for 80G receipt") 
         : schema.notRequired()
    ),
    country: yup.string().when("form_80G", (form_80G, schema) => form_80G[0] === "1" 
         ? schema.required("Country is required for 80G receipt") 
         : schema.notRequired()
      ),
    state: yup.string().when("form_80G", (form_80G, schema) => form_80G[0] === "1" 
        ? schema.required("state is required for 80G receipt") 
        : schema.notRequired()
    ),
    city: yup.string().when("form_80G", (form_80G, schema) => form_80G[0] === "1" 
        ? schema.required("City is required for 80G receipt") 
        : schema.notRequired()
    ),
    zip: yup.string().when("form_80G", (form_80G, schema) => form_80G[0] === "1" 
        ? schema.required("Zip is required for 80G receipt") 
        : schema.notRequired()
    ),
  })

const DonationForm = ({preferred_slot, campaign_id}) =>{
    const [selectedSlotAmount, setSelectedSlotAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    const totalPrice = selectedSlotAmount || Number(customAmount) || 0;

    const searchParams = useSearchParams();
    
    const utm_source = searchParams.get('utm_source');
    const utm_medium = searchParams.get('utm_medium');
    const utm_campaign = searchParams.get('utm_campaign');
    const utm_content = searchParams.get('utm_content');
    const utm_id = searchParams.get('utm_id');
    const utm_term = searchParams.get('utm_term');

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    const  { register, handleSubmit, reset, formState: { errors }, setValue, watch,clearErrors} = useForm({
        resolver: yupResolver(getSchema()),
        mode: 'onSubmit',         // ✅ only validate on submit
        reValidateMode: 'onChange', 
        defaultValues: {
            form_80G: "0",
            donation_amount: totalPrice || 0
        }
    });
     const is80GSelected = watch("form_80G") === "1";
    const [loading, setLoading] = useState(false); 
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.origin + window.location.pathname);
        }
    }, []);

    useEffect(() => {
        setValue("campaign_id", campaign_id);
    }, [setValue, campaign_id]);

    useEffect(() => {
        setValue("donation_amount", totalPrice);
    }, [totalPrice, setValue]);

    let slotArray = [];

    try {
    slotArray = Array.isArray(preferred_slot)
        ? preferred_slot
        : typeof preferred_slot === 'string' && preferred_slot.trim().length > 0
        ? JSON.parse(preferred_slot)
        : [];
    } catch (error) {
    console.error("Invalid JSON for preferred_slot:", preferred_slot, error);
    slotArray = [];
    }

   

    const onSubmit = async (data) => {
        data.donation_amount = selectedSlotAmount || Number(customAmount) || 0;
        data.campaign_id = campaign_id;
        console.log(data);
    };

    return(
        <div className="DonationForm_div">
            <form id="donateForm" onSubmit={handleSubmit(onSubmit)} className="campaign_donation_payment">
                <input type="hidden" id="campaign_id" {...register("campaign_id")} />
                <div className="donationForm_heading">
                    <h3>Donation Amount</h3>
                </div>
                <div className="donationForm_amount">
                    {slotArray &&
                    slotArray?.map((item, index) =>
                    <div 
                        key={index} 
                        className={`donationForm_amount__single ${selectedSlotAmount === Number(item) ? 'active' : ''}`}
                        data-value={item}
                        onClick={() => {
                            setSelectedSlotAmount(Number(item));
                            setCustomAmount('');
                        }}
                        >{item}</div>
                    )}
                    <div className="donationForm_amount__field">
                        <input 
                            id="custom_amount" 
                            className="amount" 
                            placeholder="Enter other amount" 
                            type="number" 
                            value={customAmount} 
                            name="custom_amount"
                            onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setSelectedSlotAmount(null);
                            }}
                            />
                    </div>
                </div>
                <div className="donationForm_heading mb-3">
                    <h3>Personal Details</h3>
                </div>
                <div className="form-group row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="pan">Full Name<span className="required text-danger" title="This field is required.">*</span></label>
                        <input 
                            type="text" 
                            id="full_name"   
                            {...register("full_name")} 
                            className="form-control"
                            placeholder="Enter Your Full Name*"
                        />
                        <p className="form_error mb-0">{errors.full_name?.message}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="emailid">Email ID<span className="required text-danger" title="This field is required.">*</span></label>
                        <input 
                            type="email" 
                            id="emailid"  
                            {...register("emailid")} 
                            className="form-control"
                            placeholder="Enter Your Email ID*"
                        />
                        <p className="form_error mb-0">{errors.emailid?.message}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="phone">Phone Number<span className="required text-danger" title="This field is required.">*</span></label>
                        <input 
                            type="tel" 
                            id="phone"  
                            {...register("phone")}
                            className="form-control"
                            placeholder="Enter Your Phone Number*"
                        />
                        <p className="form_error mb-0">{errors.phone?.message}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="pan">I need 80G exempted donation receipt.<span className="required text-danger" title="This field is required.">*</span></label>
                        <div className="name_display_wrap">
                            <label>
                                <input type="radio" className="form_80G" {...register("form_80G")} value="0" /> No
                            </label>
                            <label>
                                <input type="radio" className="form_80G" {...register("form_80G")} value="1" /> Yes
                            </label>  
                        </div>    
                    </div>   
                </div>
                {is80GSelected && (
                <div className="80gInfo mt-3">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="pan">PAN Number <span className="required" title="This field is required.">*</span></label>
                                <input 
                                type="text"
                                {...register("pan")}
                                id="pan" 
                                aria-required="true"
                                className="form-control" />
                                <p className="form_error mb-0">{errors.pan?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="address">Address <span className="required" title="This field is required.">*</span></label>
                                <input 
                                type="text" 
                                id="address" 
                                {...register("address")}
                                aria-required="true"
                                className="form-control" />
                                <p className="form_error mb-0">{errors.address?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="country">Country <span className="required" title="This field is required.">*</span></label>
                                <input 
                                type="text" 
                                id="country" 
                                {...register("country")}
                                aria-required="true"
                                className="form-control" />
                                <p className="form_error mb-0">{errors.country?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="state">State <span className="required" title="This field is required.">*</span></label>
                                <input 
                                type="text" 
                                id="state"
                                {...register("state")} 
                                aria-required="true"
                                className="form-control" />
                                <p className="form_error mb-0">{errors.state?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="city">City <span className="required" title="This field is required.">*</span></label>
                                <input 
                                type="text" 
                                id="city" 
                                {...register("city")} 
                                aria-required="true"
                                className="form-control" />
                                <p className="form_error mb-0">{errors.city?.message}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="zip">Zip <span className="required" title="This field is required.">*</span></label>
                                <input 
                                type="text" 
                                id="zip" 
                                {...register("zip")} 
                                aria-required="true"
                                className="form-control" />
                                <p className="form_error mb-0">{errors.zip?.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <div className="total_amount d-flex justify-content-start align-items-center gap-1 mt-4 mb-1">
                    <p>Total Donation Amount</p>
                    <input type="hidden" {...register("donation_amount")} id="donation_amount" />
                    <p className="totalDonation">₹{totalPrice}</p>
                </div>
                {errors.donation_amount && (
                    <p className="text-danger fw-bold">{errors.donation_amount.message}</p>
                )}
                <p style={{ fontSize: '.92rem', fontSize: '15px' }} className='mb-1 mt-3'><strong>All payments go through a secure gateway</strong></p>
                <div className="donate-form-button my-3 text-center" disabled={loading}>
                <button type="submit" className="btn btn-primary donationBtn">
                    {loading ? (
                        'Please wait...'
                    ) : (
                        <>
                        Donate Now
                        </>
                    )}
                </button>
                </div>
            </form>
        </div>
    )
}

export default DonationForm;