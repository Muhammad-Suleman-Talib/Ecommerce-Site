import { TagsIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
    name: 'salesType',
    title: 'Sales Type',
    type: 'document',
    icon: TagsIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sales Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sales Description',
            type: 'text',
           
        }),
        defineField({
            name: 'discountAmount',
            title: 'Discount Amount',
            type: 'number',
            description:"amount off in percentage of the original price"
        }),
        defineField({
            name: 'couponCode',
            title: 'Coupon Code',
            type: 'string',
        }),
        defineField({
            name: 'validFrom',
            title: 'valid From',
            type: 'datetime',
        }),
        defineField({
            name: 'validUntil',
            title: 'valid Until',
            type: 'datetime',
        }),
        defineField({
            name:"isActive",
            title:"Is Active",
            type:"boolean",
            description:"Is the sales active",
            initialValue:true
        })
    ],
    preview: {
        select: {
            title: 'title',
            discountAmount: 'discountAmount',    
            cuponCode: 'couponCode',
            isActive: 'isActive',
        },
        prepare:(Selection) =>{
            const {title,discountAmount,cuponCode,isActive} = Selection
            const status = isActive ? 'Active' : 'Inactive'
            return {
                title:`${title}`,
                subtitle:`${discountAmount}% off | ${cuponCode} | ${status}`
            }
        }
    },
})