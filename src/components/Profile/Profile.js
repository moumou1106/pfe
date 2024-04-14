import React, { useEffect, useState } from "react";
import "./profile.css";
import circleUser from "../../assets/circleUser.png";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const animatedComponents = makeAnimated();

const Profile = () => {
  const country_list = [
    { value: "AF", label: "Afghanistan" },
    { value: "AX", label: "Åland Islands" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia (Plurinational State of)" },
    { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BV", label: "Bouvet Island" },
    { value: "BR", label: "Brazil" },
    { value: "IO", label: "British Indian Ocean Territory" },
    { value: "BN", label: "Brunei Darussalam" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "CV", label: "Cabo Verde" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo" },
    { value: "CD", label: "Congo (Democratic Republic of the)" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CW", label: "Curaçao" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FK", label: "Falkland Islands (Malvinas)" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guiana" },
    { value: "PF", label: "French Polynesia" },
    { value: "TF", label: "French Southern Territories" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GP", label: "Guadeloupe" },
    { value: "GU", label: "Guam" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HM", label: "Heard Island and McDonald Islands" },
    { value: "VA", label: "Holy See" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran (Islamic Republic of)" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IM", label: "Isle of Man" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KP", label: "Korea (Democratic People's Republic of)" },
    { value: "KR", label: "Korea (Republic of)" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Lao People's Democratic Republic" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macao" },
    { value: "MK", label: "Macedonia (the former Yugoslav Republic of)" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia (Federated States of)" },
    { value: "MD", label: "Moldova (Republic of)" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "NF", label: "Norfolk Island" },
    { value: "MP", label: "Northern Mariana Islands" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PS", label: "Palestine, State of" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PN", label: "Pitcairn" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "PR", label: "Puerto Rico" },
    { value: "QA", label: "Qatar" },
    { value: "RE", label: "Réunion" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russian Federation" },
    { value: "RW", label: "Rwanda" },
    { value: "BL", label: "Saint Barthélemy" },
    { value: "SH", label: "Saint Helena, Ascension and Tristan da Cunha" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "MF", label: "Saint Martin (French part)" },
    { value: "PM", label: "Saint Pierre and Miquelon" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "Sao Tome and Principe" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SX", label: "Sint Maarten (Dutch part)" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "GS", label: "South Georgia and the South Sandwich Islands" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard and Jan Mayen" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syrian Arab Republic" },
    { value: "TW", label: "Taiwan (Province of China)" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania, United Republic of" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    {
      value: "GB",
      label: "United Kingdom of Great Britain and Northern Ireland",
    },
    { value: "US", label: "United States of America" },
    { value: "UM", label: "United States Minor Outlying Islands" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VE", label: "Venezuela (Bolivarian Republic of)" },
    { value: "VN", label: "Viet Nam" },
    { value: "VG", label: "Virgin Islands (British)" },
    { value: "VI", label: "Virgin Islands (U.S.)" },
    { value: "WF", label: "Wallis and Futuna" },
    { value: "EH", label: "Western Sahara" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const data = await axios.get("http://localhost:3000/api/users/getOne", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(data.data);
        setUser(data.data);
        setFirstName(data.data.firstName);
        setLastName(data.data.lastName);
        setEmail(data.data.email);
        setPhone(data.data.phone);
        setImage(data.data.image);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        if (password && password2 && password3) {
          const data = await axios.post(
            "http://localhost:3000/api/users/passcheck",
            { email, password }
          );
          if (!data.data.message) {
            if (password2 === password3) {
              await axios.put(
                `http://localhost:3000/api/users/update/${user.id}`,
                {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phone: phone,
                  image: image,
                  password:password2
                }
              );
            }
          }
        } else {
          await axios.put(`http://localhost:3000/api/users/update/${user.id}`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            image: image,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const profileUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "oztadvnr");
    await axios
      .post("https://api.cloudinary.com/v1_1/dl4qexes8/upload", formData)
      .then((response) => {
        setImage(response.data["secure_url"]);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile">
      <div className="upperProfile">
        <div className="upperProfileLeft">
          <p>Profile Utilisateur</p>
          <img src={image || circleUser} alt="" />
        </div>
        <div className="upperProfileRight">
          <div className="customFileInput">
            <p>Choisir photo</p>
            <input type="file" onChange={(e) => profileUpload(e)} />
          </div>
          <p className="suppProfile" onClick={() => setImage("")}>
            Supprimer
          </p>
        </div>
      </div>
      <p className="profileTitles">Informations générales</p>
      <div className="midProfile">
        <div className="twoInputs">
          <div className="halfInputBox">
            <input
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="halfInputBox">
            <input
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="oneInput">
          <div className="fullInputBox">
            <input type="text" placeholder="Numéro CIN" />
          </div>
        </div>
        <div className="oneInput">
          <div className="fullInputBox">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="oneInput">
          <div className="fullInputBox">
            <input
              type="text"
              placeholder="Numéro mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
      <p className="profileTitles">Coordonnées</p>
      <div className="lowerprofile">
        <div className="oneInput">
          <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={country_list}
            placeholder="Sélectionnez votre pays"
            className="customSelect"
          />
        </div>
        <div className="oneInput">
          <div className="fullInputBox">
            <input type="text" placeholder="Addresse" />
          </div>
        </div>
        <div className="twoInputs">
          <div className="halfInputBox">
            <input type="text" placeholder="Ville" />
          </div>
          <div className="halfInputBox">
            <input type="text" placeholder="Code postale" />
          </div>
        </div>
        <div className="twoPasswordInput">
          <div className="halfPasswordInput">
            <FontAwesomeIcon className="profileIcons" icon={faKey} />
            <input
              type={show ? "text" : "password"}
              placeholder="Mot de passe actuel"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {show ? (
              <FontAwesomeIcon
                className="profileIcons"
                icon={faEye}
                onClick={() => setShow(!show)}
              />
            ) : (
              <FontAwesomeIcon
                className="profileIcons"
                icon={faEyeSlash}
                onClick={() => setShow(!show)}
              />
            )}
          </div>
          <div className="halfPasswordInput">
            <FontAwesomeIcon className="profileIcons" icon={faKey} />
            <input
              type={show2 ? "text" : "password"}
              placeholder="Nouveau mot de passe"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {show2 ? (
              <FontAwesomeIcon
                className="profileIcons"
                icon={faEye}
                onClick={() => setShow2(!show2)}
              />
            ) : (
              <FontAwesomeIcon
                className="profileIcons"
                icon={faEyeSlash}
                onClick={() => setShow2(!show2)}
              />
            )}
          </div>
        </div>
        <div className="onePasswordInput">
          <FontAwesomeIcon className="profileIcons" icon={faKey} />
          <input
            type={show3 ? "text" : "password"}
            placeholder="Confirmer nouveau mot de passe"
            value={password3}
            onChange={(e) => setPassword3(e.target.value)}
          />
          {show3 ? (
            <FontAwesomeIcon
              className="profileIcons"
              icon={faEye}
              onClick={() => setShow3(!show3)}
            />
          ) : (
            <FontAwesomeIcon
              className="profileIcons"
              icon={faEyeSlash}
              onClick={() => setShow3(!show3)}
            />
          )}
        </div>
      </div>
      <div className="submitSection">
        <p className="submitProfile" onClick={(e)=>{
          e.preventDefault();
          handleUpdate();
        }}>Enregistrer</p>
      </div>
    </div>
  );
};

export default Profile;
