import React, { Component } from 'react'


export default class History extends Component {
    constructor() {
        super();
        this.state = {
            "previousTests": [
                {
                    "id": "1",
                    "patientName": "John Doe",
                    "date": "2023-01-15",
                    "description": "Rash on the forearm",
                    "diagnosis": "Contact dermatitis",
                    "treatment": "Prescribed topical corticosteroid cream",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_rf_photo_of_herpes_zoster-1.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "2",
                    "patientName": "Jane Smith",
                    "date": "2023-02-20",
                    "description": "Acne on the face",
                    "diagnosis": "Acne vulgaris",
                    "treatment": "Prescribed oral antibiotics and topical retinoids",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_rf_photo_of_polycyclic_hives.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "3",
                    "patientName": "Alice Johnson",
                    "date": "2023-03-10",
                    "description": "Psoriasis on the scalp",
                    "diagnosis": "Psoriasis",
                    "treatment": "Prescribed coal tar shampoo and topical calcineurin inhibitors",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_rf_photo_of_psoriasis_plaque.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "4",
                    "patientName": "David Lee",
                    "date": "2023-04-05",
                    "description": "Eczema on the hands",
                    "diagnosis": "Atopic dermatitis",
                    "treatment": "Prescribed emollients and topical steroids",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_rf_photo_of_eczema_on_hand.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "5",
                    "patientName": "Sarah Wilson",
                    "date": "2023-05-12",
                    "description": "Skin allergy on the neck",
                    "diagnosis": "Allergic contact dermatitis",
                    "treatment": "Prescribed antihistamines and avoidance of allergen",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_rf_photo_of_rosacea_on_face.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "6",
                    "patientName": "Michael Brown",
                    "date": "2023-06-20",
                    "description": "Melanoma on the back",
                    "diagnosis": "Melanoma (cancer)",
                    "treatment": "Immediate surgical excision and further treatment",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/cdc_cold_sore_closeup_lips.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "7",
                    "patientName": "Emily Taylor",
                    "date": "2023-07-08",
                    "description": "Hives on the torso",
                    "diagnosis": "Urticaria",
                    "treatment": "Prescribed antihistamines and corticosteroids",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/getty_rm_photo_of_poison_ivy_rash-1.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "8",
                    "patientName": "William Clark",
                    "date": "2023-08-15",
                    "description": "Fungal infection on the feet",
                    "diagnosis": "Tinea pedis",
                    "treatment": "Prescribed antifungal cream and oral medication",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/493ss_dermnet_rm_pseudofolliculitis_barbae.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "9",
                    "patientName": "Olivia White",
                    "date": "2023-09-02",
                    "description": "Warts on the hands",
                    "diagnosis": "Common warts",
                    "treatment": "Cryotherapy to remove warts",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet-skin-tags-neck.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "10",
                    "patientName": "James Anderson",
                    "date": "2023-10-10",
                    "description": "Rash on the legs",
                    "diagnosis": "Allergic dermatitis",
                    "treatment": "Prescribed topical corticosteroids and antihistamines",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_duo_acne_whitehead_blackhead.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "11",
                    "patientName": "Sophia Evans",
                    "date": "2023-11-20",
                    "description": "Rosacea on the cheeks",
                    "diagnosis": "Rosacea",
                    "treatment": "Prescribed topical antibiotics and avoidance of triggers",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/photoresearchers_rm_interdigital_athletes_foot.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "12",
                    "patientName": "Daniel Hall",
                    "date": "2023-12-05",
                    "description": "Skin rash on the chest",
                    "diagnosis": "Contact dermatitis",
                    "treatment": "Prescribed topical corticosteroid cream",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/precancerous_lesions_slideshow/dermnet_photo_of_large_raised_mole.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "13",
                    "patientName": "Ava Turner",
                    "date": "2024-01-08",
                    "description": "Eczema on the face",
                    "diagnosis": "Atopic dermatitis",
                    "treatment": "Prescribed emollients and topical steroids",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/getty_rf_age_spots_hand.jpg?resize=652px:*&output-quality=100"
                },
                {
                    "id": "14",
                    "patientName": "Ethan Roberts",
                    "date": "2024-02-15",
                    "description": "Dermatitis on the hands",
                    "diagnosis": "Contact dermatitis",
                    "treatment": "Prescribed topical corticosteroid cream",
                    "imageURL": "https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/adult_skin_problems_slideshow/dermnet_pityriasis_rosea_torso.jpg?resize=652px:*&output-quality=100"
                }
            ]
        }

    }
    render() {
        return <>
        <div className="container my-3">
            <div className="row">
                {this.state.previousTests.map((ele) => {
                    return (
                        <div>
                        
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    }
}
