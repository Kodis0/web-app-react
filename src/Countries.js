const countries = [
  { code: 'AF', name: 'Afghanistan', phoneCode: '+93' },
  { code: 'AL', name: 'Albania', phoneCode: '+355' },
  { code: 'DZ', name: 'Algeria', phoneCode: '+213' },
  { code: 'AD', name: 'Andorra', phoneCode: '+376' },
  { code: 'AO', name: 'Angola', phoneCode: '+244' },
  { code: 'AG', name: 'Antigua and Barbuda', phoneCode: '+1' },
  { code: 'AR', name: 'Argentina', phoneCode: '+54' },
  { code: 'AM', name: 'Armenia', phoneCode: '+374' },
  { code: 'AU', name: 'Australia', phoneCode: '+61' },
  { code: 'AT', name: 'Austria', phoneCode: '+43' },
  { code: 'AZ', name: 'Azerbaijan', phoneCode: '+994' },
  { code: 'BS', name: 'Bahamas', phoneCode: '+1' },
  { code: 'BH', name: 'Bahrain', phoneCode: '+973' },
  { code: 'BD', name: 'Bangladesh', phoneCode: '+880' },
  { code: 'BB', name: 'Barbados', phoneCode: '+1' },
  { code: 'BY', name: 'Belarus', phoneCode: '+375' },
  { code: 'BE', name: 'Belgium', phoneCode: '+32' },
  { code: 'BZ', name: 'Belize', phoneCode: '+501' },
  { code: 'BJ', name: 'Benin', phoneCode: '+229' },
  { code: 'BT', name: 'Bhutan', phoneCode: '+975' },
  { code: 'BO', name: 'Bolivia', phoneCode: '+591' },
  { code: 'BA', name: 'Bosnia and Herzegovina', phoneCode: '+387' },
  { code: 'BW', name: 'Botswana', phoneCode: '+267' },
  { code: 'BR', name: 'Brazil', phoneCode: '+55' },
  { code: 'BN', name: 'Brunei Darussalam', phoneCode: '+673' },
  { code: 'BG', name: 'Bulgaria', phoneCode: '+359' },
  { code: 'BF', name: 'Burkina Faso', phoneCode: '+226' },
  { code: 'BI', name: 'Burundi', phoneCode: '+257' },
  { code: 'CV', name: 'Cabo Verde', phoneCode: '+238' },
  { code: 'KH', name: 'Cambodia', phoneCode: '+855' },
  { code: 'CM', name: 'Cameroon', phoneCode: '+237' },
  { code: 'CA', name: 'Canada', phoneCode: '+1' },
  { code: 'CF', name: 'Central African Republic', phoneCode: '+236' },
  { code: 'TD', name: 'Chad', phoneCode: '+235' },
  { code: 'CL', name: 'Chile', phoneCode: '+56' },
  { code: 'CN', name: 'China', phoneCode: '+86' },
  { code: 'CO', name: 'Colombia', phoneCode: '+57' },
  { code: 'KM', name: 'Comoros', phoneCode: '+269' },
  { code: 'CG', name: 'Congo', phoneCode: '+242' },
  { code: 'CR', name: 'Costa Rica', phoneCode: '+506' },
  { code: 'HR', name: 'Croatia', phoneCode: '+385' },
  { code: 'CU', name: 'Cuba', phoneCode: '+53' },
  { code: 'CY', name: 'Cyprus', phoneCode: '+357' },
  { code: 'CZ', name: 'Czech Republic', phoneCode: '+420' },
  { code: 'CI', name: "Côte d'Ivoire", phoneCode: '+225' },
  { code: 'DK', name: 'Denmark', phoneCode: '+45' },
  { code: 'DJ', name: 'Djibouti', phoneCode: '+253' },
  { code: 'DM', name: 'Dominica', phoneCode: '+1' },
  { code: 'DO', name: 'Dominican Republic', phoneCode: '+1' },
  { code: 'EC', name: 'Ecuador', phoneCode: '+593' },
  { code: 'EG', name: 'Egypt', phoneCode: '+20' },
  { code: 'SV', name: 'El Salvador', phoneCode: '+503' },
  { code: 'GQ', name: 'Equatorial Guinea', phoneCode: '+240' },
  { code: 'ER', name: 'Eritrea', phoneCode: '+291' },
  { code: 'EE', name: 'Estonia', phoneCode: '+372' },
  { code: 'ET', name: 'Ethiopia', phoneCode: '+251' },
  { code: 'FJ', name: 'Fiji', phoneCode: '+679' },
  { code: 'FI', name: 'Finland', phoneCode: '+358' },
  { code: 'FR', name: 'France', phoneCode: '+33' },
  { code: 'GA', name: 'Gabon', phoneCode: '+241' },
  { code: 'GM', name: 'Gambia', phoneCode: '+220' },
  { code: 'GE', name: 'Georgia', phoneCode: '+995' },
  { code: 'DE', name: 'Germany', phoneCode: '+49' },
  { code: 'GH', name: 'Ghana', phoneCode: '+233' },
  { code: 'GR', name: 'Greece', phoneCode: '+30' },
  { code: 'GD', name: 'Grenada', phoneCode: '+1' },
  { code: 'GT', name: 'Guatemala', phoneCode: '+502' },
  { code: 'GN', name: 'Guinea', phoneCode: '+224' },
  { code: 'GW', name: 'Guinea-Bissau', phoneCode: '+245' },
  { code: 'GY', name: 'Guyana', phoneCode: '+592' },
  { code: 'HT', name: 'Haiti', phoneCode: '+509' },
  { code: 'HN', name: 'Honduras', phoneCode: '+504' },
  { code: 'HU', name: 'Hungary', phoneCode: '+36' },
  { code: 'IS', name: 'Iceland', phoneCode: '+354' },
  { code: 'IN', name: 'India', phoneCode: '+91' },
  { code: 'ID', name: 'Indonesia', phoneCode: '+62' },
  { code: 'IR', name: 'Iran', phoneCode: '+98' },
  { code: 'IQ', name: 'Iraq', phoneCode: '+964' },
  { code: 'IE', name: 'Ireland', phoneCode: '+353' },
  { code: 'IL', name: 'Israel', phoneCode: '+972' },
  { code: 'IT', name: 'Italy', phoneCode: '+39' },
  { code: 'JM', name: 'Jamaica', phoneCode: '+1' },
  { code: 'JP', name: 'Japan', phoneCode: '+81' },
  { code: 'JO', name: 'Jordan', phoneCode: '+962' },
  { code: 'KZ', name: 'Kazakhstan', phoneCode: '+7' },
  { code: 'KE', name: 'Kenya', phoneCode: '+254' },
  { code: 'KI', name: 'Kiribati', phoneCode: '+686' },
  { code: 'KW', name: 'Kuwait', phoneCode: '+965' },
  { code: 'KG', name: 'Kyrgyzstan', phoneCode: '+996' },
  { code: 'LA', name: 'Lao People s Democratic Republic:', phoneCode: '+856' },
  { code: 'LV', name: 'Latvia', phoneCode: '+371' },
  { code: 'LB', name: 'Lebanon', phoneCode: '+961' },
  { code: 'LS', name: 'Lesotho', phoneCode: '+266' },
  { code: 'LR', name: 'Liberia', phoneCode: '+231' },
  { code: 'LY', name: 'Libya', phoneCode: '+218' },
  { code: 'LI', name: 'Liechtenstein', phoneCode: '+423' },
  { code: 'LT', name: 'Lithuania', phoneCode: '+370' },
  { code: 'LU', name: 'Luxembourg', phoneCode: '+352' },
  { code: 'MG', name: 'Madagascar', phoneCode: '+261' },
  { code: 'MW', name: 'Malawi', phoneCode: '+265' },
  { code: 'MY', name: 'Malaysia', phoneCode: '+60' },
  { code: 'MV', name: 'Maldives', phoneCode: '+960' },
  { code: 'ML', name: 'Mali', phoneCode: '+223' },
  { code: 'MT', name: 'Malta', phoneCode: '+356' },
  { code: 'MH', name: 'Marshall Islands', phoneCode: '+692' },
  { code: 'MR', name: 'Mauritania', phoneCode: '+222' },
  { code: 'MU', name: 'Mauritius', phoneCode: '+230' },
  { code: 'MX', name: 'Mexico', phoneCode: '+52' },
  { code: 'FM', name: 'Micronesia', phoneCode: '+691' },
  { code: 'MC', name: 'Monaco', phoneCode: '+377' },
  { code: 'MN', name: 'Mongolia', phoneCode: '+976' },
  { code: 'ME', name: 'Montenegro', phoneCode: '+382' },
  { code: 'MA', name: 'Morocco', phoneCode: '+212' },
  { code: 'MZ', name: 'Mozambique', phoneCode: '+258' },
  { code: 'MM', name: 'Myanmar', phoneCode: '+95' },
  { code: 'NA', name: 'Namibia', phoneCode: '+264' },
  { code: 'NR', name: 'Nauru', phoneCode: '+674' },
  { code: 'NP', name: 'Nepal', phoneCode: '+977' },
  { code: 'NL', name: 'Netherlands', phoneCode: '+31' },
  { code: 'NZ', name: 'New Zealand', phoneCode: '+64' },
  { code: 'NI', name: 'Nicaragua', phoneCode: '+505' },
  { code: 'NE', name: 'Niger', phoneCode: '+227' },
  { code: 'NG', name: 'Nigeria', phoneCode: '+234' },
  { code: 'NO', name: 'Norway', phoneCode: '+47' },
  { code: 'OM', name: 'Oman', phoneCode: '+968' },
  { code: 'PK', name: 'Pakistan', phoneCode: '+92' },
  { code: 'PW', name: 'Palau', phoneCode: '+680' },
  { code: 'PA', name: 'Panama', phoneCode: '+507' },
  { code: 'PG', name: 'Papua New Guinea', phoneCode: '+675' },
  { code: 'PY', name: 'Paraguay', phoneCode: '+595' },
  { code: 'PE', name: 'Peru', phoneCode: '+51' },
  { code: 'PH', name: 'Philippines', phoneCode: '+63' },
  { code: 'PL', name: 'Poland', phoneCode: '+48' },
  { code: 'PT', name: 'Portugal', phoneCode: '+351' },
  { code: 'QA', name: 'Qatar', phoneCode: '+974' },
  { code: 'KR', name: 'Republic of Korea', phoneCode: '+82' },
  { code: 'MD', name: 'Republic of Moldova', phoneCode: '+373' },
  { code: 'RO', name: 'Romania', phoneCode: '+40' },
  { code: 'RU', name: 'Russian Federation', phoneCode: '+7' },
  { code: 'RW', name: 'Rwanda', phoneCode: '+250' },
  { code: 'KN', name: 'Saint Kitts and Nevis', phoneCode: '+1' },
  { code: 'LC', name: 'Saint Lucia', phoneCode: '+1' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines', phoneCode: '+1' },
  { code: 'WS', name: 'Samoa', phoneCode: '+685' },
  { code: 'SM', name: 'San Marino', phoneCode: '+378' },
  { code: 'ST', name: 'Sao Tome and Principe', phoneCode: '+239' },
  { code: 'SA', name: 'Saudi Arabia', phoneCode: '+966' },
  { code: 'SN', name: 'Senegal', phoneCode: '+221' },
  { code: 'RS', name: 'Serbia', phoneCode: '+381' },
  { code: 'SC', name: 'Seychelles', phoneCode: '+248' },
  { code: 'SL', name: 'Sierra Leone', phoneCode: '+232' },
  { code: 'SG', name: 'Singapore', phoneCode: '+65' },
  { code: 'SK', name: 'Slovakia', phoneCode: '+421' },
  { code: 'SI', name: 'Slovenia', phoneCode: '+386' },
  { code: 'SB', name: 'Solomon Islands', phoneCode: '+677' },
  { code: 'SO', name: 'Somalia', phoneCode: '+252' },
  { code: 'ZA', name: 'South Africa', phoneCode: '+27' },
  { code: 'SS', name: 'South Sudan', phoneCode: '+211' },
  { code: 'ES', name: 'Spain', phoneCode: '+34' },
  { code: 'LK', name: 'Sri Lanka', phoneCode: '+94' },
  { code: 'SD', name: 'Sudan', phoneCode: '+249' },
  { code: 'SR', name: 'Suriname', phoneCode: '+597' },
  { code: 'SZ', name: 'Swaziland', phoneCode: '+268' },
  { code: 'SE', name: 'Sweden', phoneCode: '+46' },
  { code: 'CH', name: 'Switzerland', phoneCode: '+41' },
  { code: 'SY', name: 'Syrian Arab Republic', phoneCode: '+963' },
  { code: 'TJ', name: 'Tajikistan', phoneCode: '+992' },
  { code: 'TH', name: 'Thailand', phoneCode: '+66' },
  { code: 'MK', name: 'The former Yugoslav Republic of Macedonia', phoneCode: '+389' },
  { code: 'TL', name: 'Timor-Leste', phoneCode: '+670' },
  { code: 'TG', name: 'Togo', phoneCode: '+228' },
  { code: 'TO', name: 'Tonga', phoneCode: '+676' },
  { code: 'TT', name: 'Trinidad and Tobago', phoneCode: '+1' },
  { code: 'TN', name: 'Tunisia', phoneCode: '+216' },
  { code: 'TR', name: 'Turkey', phoneCode: '+90' },
  { code: 'TM', name: 'Turkmenistan', phoneCode: '+993' },
  { code: 'TV', name: 'Tuvalu', phoneCode: '+688' },
  { code: 'UG', name: 'Uganda', phoneCode: '+256' },
  { code: 'UA', name: 'Ukraine', phoneCode: '+380' },
  { code: 'AE', name: 'United Arab Emirates', phoneCode: '+971' },
  { code: 'GB', name: 'United Kingdom', phoneCode: '+44' },
  { code: 'TZ', name: 'United Republic of Tanzania', phoneCode: '+255' },
  { code: 'US', name: 'United States', phoneCode: '+1' },
  { code: 'UY', name: 'Uruguay', phoneCode: '+598' },
  { code: 'UZ', name: 'Uzbekistan', phoneCode: '+998' },
  { code: 'VU', name: 'Vanuatu', phoneCode: '+678' },
  { code: 'VE', name: 'Venezuela', phoneCode: '+58' },
  { code: 'VN', name: 'Viet Nam', phoneCode: '+84' },
  { code: 'YE', name: 'Yemen', phoneCode: '+967' },
  { code: 'ZM', name: 'Zambia', phoneCode: '+260' },
  { code: 'ZW', name: 'Zimbabwe', phoneCode: '+263' }
  ];
export default countries;