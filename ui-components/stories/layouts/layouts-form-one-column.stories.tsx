import { FileTrigger, Group } from "react-aria-components";

import { AccessibleIcon } from "@/components/accessible-icon";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Checkbox, CheckboxField } from "@/components/checkbox";
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxGroup,
  ComboBoxInput,
  ComboBoxListBox,
  ComboBoxListItem,
  ComboBoxPopover,
} from "@/components/combobox";
import { DatePicker, DatePickerInput } from "@/components/date-picker";
import { DropZone } from "@/components/dropzone";
import {
  Description,
  FieldError,
  Input,
  Label,
  LabeledGroup,
  TextArea,
  TextField,
} from "@/components/field";
import { Form } from "@/components/form";
import { Heading } from "@/components/heading";
import {
  InputAddon,
  InputGroup,
  InputSeparator,
} from "@/components/input-group";
import { NativeSelect, NativeSelectField } from "@/components/native-select";
import { Radio, RadioGroup, Radios } from "@/components/radio-group";
import {
  Select,
  SelectButton,
  SelectListBox,
  SelectListItem,
  SelectListItemLabel,
  SelectPopover,
} from "@/components/select";
import { Separator } from "@/components/separator";
import {
  Switch,
  Switches,
  SwitchField,
  SwitchGroup,
} from "@/components/switch";
import { Strong, Text } from "@/components/text";

import { docs } from "../../.storybook/docs";

const meta = {
  title: "Layouts/Form",
  parameters: {
    layout: "centered",
    docs: {
      ...docs,
      controls: {
        exclude: /.*/gv,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

function getIndustries() {
  return [
    { code: 47, groups: "corp, fin", description: "Accounting" },
    { code: 94, groups: "man, tech, tran", description: "Airlines/Aviation" },
    {
      code: 120,
      groups: "leg, org",
      description: "Alternative Dispute Resolution",
    },
    { code: 125, groups: "hlth", description: "Alternative Medicine" },
    { code: 127, groups: "art, med", description: "Animation" },
    { code: 19, groups: "good", description: "Apparel & Fashion" },
    { code: 50, groups: "cons", description: "Architecture & Planning" },
    { code: 111, groups: "art, med, rec", description: "Arts and Crafts" },
    { code: 53, groups: "man", description: "Automotive" },
    { code: 52, groups: "gov, man", description: "Aviation & Aerospace" },
    { code: 41, groups: "fin", description: "Banking" },
    { code: 12, groups: "gov, hlth, tech", description: "Biotechnology" },
    { code: 36, groups: "med, rec", description: "Broadcast Media" },
    { code: 49, groups: "cons", description: "Building Materials" },
    {
      code: 138,
      groups: "corp, man",
      description: "Business Supplies and Equipment",
    },
    { code: 129, groups: "fin", description: "Capital Markets" },
    { code: 54, groups: "man", description: "Chemicals" },
    {
      code: 90,
      groups: "org, serv",
      description: "Civic & Social Organization",
    },
    { code: 51, groups: "cons, gov", description: "Civil Engineering" },
    {
      code: 128,
      groups: "cons, corp, fin",
      description: "Commercial Real Estate",
    },
    { code: 118, groups: "tech", description: "Computer & Network Security" },
    { code: 109, groups: "med, rec", description: "Computer Games" },
    { code: 3, groups: "tech", description: "Computer Hardware" },
    { code: 5, groups: "tech", description: "Computer Networking" },
    { code: 4, groups: "tech", description: "Computer Software" },
    { code: 48, groups: "cons", description: "Construction" },
    { code: 24, groups: "good, man", description: "Consumer Electronics" },
    { code: 25, groups: "good, man", description: "Consumer Goods" },
    { code: 91, groups: "org, serv", description: "Consumer Services" },
    { code: 18, groups: "good", description: "Cosmetics" },
    { code: 65, groups: "agr", description: "Dairy" },
    { code: 1, groups: "gov, tech", description: "Defense & Space" },
    { code: 99, groups: "art, med", description: "Design" },
    { code: 69, groups: "edu", description: "Education Management" },
    { code: 132, groups: "edu, org", description: "E-Learning" },
    {
      code: 112,
      groups: "good, man",
      description: "Electrical/Electronic Manufacturing",
    },
    { code: 28, groups: "med, rec", description: "Entertainment" },
    { code: 86, groups: "org, serv", description: "Environmental Services" },
    { code: 110, groups: "corp, rec, serv", description: "Events Services" },
    { code: 76, groups: "gov", description: "Executive Office" },
    { code: 122, groups: "corp, serv", description: "Facilities Services" },
    { code: 63, groups: "agr", description: "Farming" },
    { code: 43, groups: "fin", description: "Financial Services" },
    { code: 38, groups: "art, med, rec", description: "Fine Art" },
    { code: 66, groups: "agr", description: "Fishery" },
    { code: 34, groups: "rec, serv", description: "Food & Beverages" },
    { code: 23, groups: "good, man, serv", description: "Food Production" },
    { code: 101, groups: "org", description: "Fund-Raising" },
    { code: 26, groups: "good, man", description: "Furniture" },
    { code: 29, groups: "rec", description: "Gambling & Casinos" },
    {
      code: 145,
      groups: "cons, man",
      description: "Glass, Ceramics & Concrete",
    },
    { code: 75, groups: "gov", description: "Government Administration" },
    { code: 148, groups: "gov", description: "Government Relations" },
    { code: 140, groups: "art, med", description: "Graphic Design" },
    {
      code: 124,
      groups: "hlth, rec",
      description: "Health, Wellness and Fitness",
    },
    { code: 68, groups: "edu", description: "Higher Education" },
    { code: 14, groups: "hlth", description: "Hospital & Health Care" },
    { code: 31, groups: "rec, serv, tran", description: "Hospitality" },
    { code: 137, groups: "corp", description: "Human Resources" },
    { code: 134, groups: "corp, good, tran", description: "Import and Export" },
    {
      code: 88,
      groups: "org, serv",
      description: "Individual & Family Services",
    },
    { code: 147, groups: "cons, man", description: "Industrial Automation" },
    { code: 84, groups: "med, serv", description: "Information Services" },
    {
      code: 96,
      groups: "tech",
      description: "Information Technology and Services",
    },
    { code: 42, groups: "fin", description: "Insurance" },
    { code: 74, groups: "gov", description: "International Affairs" },
    {
      code: 141,
      groups: "gov, org, tran",
      description: "International Trade and Development",
    },
    { code: 6, groups: "tech", description: "Internet" },
    { code: 45, groups: "fin", description: "Investment Banking" },
    { code: 46, groups: "fin", description: "Investment Management" },
    { code: 73, groups: "gov, leg", description: "Judiciary" },
    { code: 77, groups: "gov, leg", description: "Law Enforcement" },
    { code: 9, groups: "leg", description: "Law Practice" },
    { code: 10, groups: "leg", description: "Legal Services" },
    { code: 72, groups: "gov, leg", description: "Legislative Office" },
    {
      code: 30,
      groups: "rec, serv, tran",
      description: "Leisure, Travel & Tourism",
    },
    { code: 85, groups: "med, rec, serv", description: "Libraries" },
    {
      code: 116,
      groups: "corp, tran",
      description: "Logistics and Supply Chain",
    },
    { code: 143, groups: "good", description: "Luxury Goods & Jewelry" },
    { code: 55, groups: "man", description: "Machinery" },
    { code: 11, groups: "corp", description: "Management Consulting" },
    { code: 95, groups: "tran", description: "Maritime" },
    { code: 97, groups: "corp", description: "Market Research" },
    { code: 80, groups: "corp, med", description: "Marketing and Advertising" },
    {
      code: 135,
      groups: "cons, gov, man",
      description: "Mechanical or Industrial Engineering",
    },
    { code: 126, groups: "med, rec", description: "Media Production" },
    { code: 17, groups: "hlth", description: "Medical Devices" },
    { code: 13, groups: "hlth", description: "Medical Practice" },
    { code: 139, groups: "hlth", description: "Mental Health Care" },
    { code: 71, groups: "gov", description: "Military" },
    { code: 56, groups: "man", description: "Mining & Metals" },
    {
      code: 35,
      groups: "art, med, rec",
      description: "Motion Pictures and Film",
    },
    {
      code: 37,
      groups: "art, med, rec",
      description: "Museums and Institutions",
    },
    { code: 115, groups: "art, rec", description: "Music" },
    { code: 114, groups: "gov, org", description: "Nanotechnology" },
    { code: 81, groups: "med, rec, serv", description: "Newspapers" },
    {
      code: 100,
      groups: "org",
      description: "Non-Profit Organization Management",
    },
    { code: 57, groups: "man", description: "Oil & Energy" },
    { code: 113, groups: "med, rec", description: "Online Media" },
    { code: 123, groups: "corp, fin", description: "Outsourcing/Offshoring" },
    { code: 87, groups: "serv", description: "Package/Freight Delivery" },
    { code: 146, groups: "corp, fin", description: "Packaging and Containers" },
    { code: 61, groups: "agr", description: "Paper & Forest Products" },
    { code: 39, groups: "art, med, rec", description: "Performing Arts" },
    { code: 15, groups: "hlth", description: "Pharmaceuticals" },
    { code: 131, groups: "fin", description: "Philanthropy" },
    { code: 136, groups: "man", description: "Plastics" },
    { code: 107, groups: "corp, rec", description: "Political Organization" },
    { code: 67, groups: "edu", description: "Primary/Secondary Education" },
    { code: 83, groups: "med, rec, serv", description: "Printing" },
    { code: 105, groups: "tech", description: "Program Development" },
    { code: 102, groups: "org", description: "Public Policy" },
    {
      code: 98,
      groups: "corp, gov",
      description: "Public Relations and Communications",
    },
    { code: 78, groups: "gov", description: "Public Safety" },
    { code: 79, groups: "corp, gov", description: "Publishing" },
    { code: 62, groups: "agr", description: "Railroad Manufacture" },
    { code: 64, groups: "agr", description: "Ranching" },
    { code: 44, groups: "fin", description: "Real Estate" },
    {
      code: 40,
      groups: "fin",
      description: "Recreational Facilities and Services",
    },
    { code: 89, groups: "serv", description: "Religious Institutions" },
    { code: 144, groups: "corp", description: "Renewables & Environment" },
    { code: 70, groups: "edu", description: "Research" },
    { code: 32, groups: "rec, serv", description: "Restaurants" },
    { code: 27, groups: "good, man", description: "Retail" },
    { code: 121, groups: "tech", description: "Security and Investigations" },
    { code: 7, groups: "tech", description: "Semiconductors" },
    { code: 58, groups: "man", description: "Shipbuilding" },
    { code: 20, groups: "good", description: "Sporting Goods" },
    { code: 33, groups: "rec", description: "Sports" },
    { code: 104, groups: "tech", description: "Staffing and Recruiting" },
    { code: 22, groups: "good", description: "Supermarkets" },
    { code: 8, groups: "tech", description: "Telecommunications" },
    { code: 60, groups: "agr", description: "Textiles" },
    { code: 130, groups: "gov", description: "Think Tanks" },
    { code: 21, groups: "good", description: "Tobacco" },
    {
      code: 108,
      groups: "art, rec",
      description: "Translation and Localization",
    },
    { code: 92, groups: "org", description: "Utilities" },
    { code: 59, groups: "man", description: "Warehousing" },
    { code: 133, groups: "hlth", description: "Wholesale" },
    { code: 82, groups: "rec, serv", description: "Wine and Spirits" },
    { code: 16, groups: "hlth", description: "Wireless" },
    { code: 142, groups: "corp", description: "Writing and Editing" },
  ];
}

export function BasicExample() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Form className="mx-auto max-w-2xl space-y-12">
        <LabeledGroup>
          <Label displayLevel={2}>Work Info</Label>
          <Text>Enter your job role, company, and career details.</Text>

          <Group className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextField className="sm:col-span-3" name="title" isRequired>
              <Label requiredHint>Title</Label>
              <Input />
              <Description>Let people know what you do.</Description>
              <FieldError />
            </TextField>

            <TextField className="sm:col-span-3" name="work_email" isRequired>
              <Label requiredHint>Work email</Label>
              <InputGroup inline>
                <InputAddon>
                  <AccessibleIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                      />
                    </svg>
                  </AccessibleIcon>
                </InputAddon>

                <Input />
              </InputGroup>

              <Description>
                Email address used within your organization.
              </Description>
              <FieldError />
            </TextField>

            <TextField className="sm:col-span-3" name="company">
              <Label>Company</Label>
              <Input />
            </TextField>

            <Select
              className="sm:col-span-3"
              name="company_size"
              placeholder="Select&hellip;"
            >
              <Label> Company size (employees)</Label>
              <SelectButton />
              <SelectPopover>
                <SelectListBox>
                  <SelectListItem id="1-9">1-9</SelectListItem>
                  <SelectListItem id="10-5-">10-50</SelectListItem>
                  <SelectListItem id="50-250">50-250</SelectListItem>
                  <SelectListItem id="250+">250+</SelectListItem>
                </SelectListBox>
              </SelectPopover>
            </Select>

            <TextField className="sm:col-span-4" name="company_website">
              <Label>Company website</Label>
              <InputGroup role="presentation" inline>
                <InputAddon>https://</InputAddon>
                <Input className="ps-16 sm:ps-14" />
              </InputGroup>
            </TextField>

            <ComboBox className="sm:col-span-4" name="industry">
              <Label>Industry</Label>
              <ComboBoxGroup>
                <ComboBoxInput placeholder="Select your industry" />
                {/*<ComboBoxClearButton />*/}
                <ComboBoxButton />
              </ComboBoxGroup>

              <ComboBoxPopover>
                <ComboBoxListBox items={getIndustries()}>
                  {(item) => (
                    <ComboBoxListItem id={String(item.code)}>
                      {item.description}
                    </ComboBoxListItem>
                  )}
                </ComboBoxListBox>
              </ComboBoxPopover>
            </ComboBox>

            <LabeledGroup className="sm:col-span-4">
              <Label>Phone Number</Label>
              <InputGroup>
                <Select defaultSelectedKey="ca">
                  <Label>Phone Country Code</Label>
                  <SelectButton />

                  <SelectPopover className="w-36" placement="bottom start">
                    <SelectListBox>
                      <SelectListItem id="ca" textValue="Canada">
                        <SelectListItemLabel>
                          <span aria-hidden className="mr-1.5 inline-block">
                            &#127464;&#127462;
                          </span>
                          CA
                        </SelectListItemLabel>
                      </SelectListItem>
                      <SelectListItem id="us" textValue="United States">
                        <SelectListItemLabel>
                          <span aria-hidden className="mr-1.5 inline-block">
                            &#127482;&#127480;
                          </span>
                          US
                        </SelectListItemLabel>
                      </SelectListItem>
                    </SelectListBox>
                  </SelectPopover>
                </Select>

                <InputSeparator />

                <TextField>
                  <Label>Phone number</Label>
                  <Input placeholder="+1 (123) 457-7890" />
                </TextField>

                <InputSeparator />

                <NativeSelectField>
                  <Label>Work phone number type</Label>
                  <NativeSelect name="work_phone_number_type">
                    <option value="Mobile">Mobile</option>
                    <option value="Phone">Phone</option>
                    <option value="Page">Page</option>
                    <option value="Fax">Fax</option>
                  </NativeSelect>
                </NativeSelectField>
              </InputGroup>
            </LabeledGroup>

            <TextField className="col-span-full" name="about">
              <Label>About</Label>
              <TextArea rows={6} />
              <Description>
                You can write about your years of experience, industry, or
                skills. People also talk about their achievements or previous
                job experiences.
              </Description>
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator />

        <LabeledGroup>
          <Label displayLevel={2}>Personal Information</Label>

          <Text>
            Provide your personal details to help us get to know you better.
          </Text>

          <Group className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextField className="sm:col-span-3" name="first_name" isRequired>
              <Label requiredHint>First name</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-3">
              <Label>Last name</Label>
              <Input />
            </TextField>

            <NativeSelectField className="sm:col-span-3">
              <Label>Pronouns</Label>
              <NativeSelect name="pronouns">
                <option value="Don't specify">Don't specify</option>
                <option value="they/Them">they/Them</option>
                <option value="she/Her">her/Her</option>
                <option value="him/He">him/He</option>
              </NativeSelect>
              <Description>Let people know which pronouns you use.</Description>
            </NativeSelectField>

            <TextField className="sm:col-span-4">
              <Label>Personal email</Label>
              <Input />
            </TextField>

            <NativeSelectField className="sm:col-span-3">
              <Label>Country</Label>
              <NativeSelect>
                <option>United States</option>
                <option>Canada</option>
              </NativeSelect>
            </NativeSelectField>

            <TextField className="col-span-full">
              <Label>Street address</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-2">
              <Label>City</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-2">
              <Label>State / Province</Label>
              <Input />
            </TextField>

            <TextField className="sm:col-span-2">
              <Label>ZIP / Postal code</Label>
              <Input />
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator />

        <LabeledGroup>
          <Label displayLevel={2}>Notifications</Label>
          <Text>Configure how you receive notifications.</Text>

          <Group className="mt-8 space-y-10">
            <RadioGroup>
              <Label>Notify me about&hellip;</Label>
              <Radios>
                <Radio value="all">All new messages</Radio>
                <Radio value="direct">Direct messages and mentions</Radio>
                <Radio value="no">Nothing</Radio>
              </Radios>
            </RadioGroup>

            <SwitchGroup>
              <Label>Email Notifications</Label>
              <Switches>
                <SwitchField>
                  <Switch labelPosition="left">Communication emails</Switch>
                  <Description>
                    Receive emails about your account activity.
                  </Description>
                </SwitchField>

                <Separator dim />

                <SwitchField>
                  <Switch labelPosition="left">Marketing emails</Switch>
                  <Description>
                    Receive emails about new products, features, and more.
                  </Description>
                </SwitchField>

                <Separator dim />

                <SwitchField>
                  <Switch labelPosition="left" defaultSelected>
                    Social emails
                  </Switch>
                  <Description>
                    Receive emails for friend requests, follows, and more.
                  </Description>
                </SwitchField>

                <Separator dim />

                <SwitchField>
                  <Switch labelPosition="left" defaultSelected>
                    Security emails
                  </Switch>
                  <Description>
                    Receive emails about your account activity and security.
                  </Description>
                </SwitchField>
              </Switches>
            </SwitchGroup>
          </Group>
        </LabeledGroup>

        <CheckboxField>
          <Checkbox>Use different settings for my mobile devices</Checkbox>

          <Description>
            You can manage your mobile notifications in the mobile settings
            page.
          </Description>
        </CheckboxField>

        <Separator />

        <div className="flex justify-end">
          <Button type="submit">Update profile</Button>
        </div>
      </Form>
    </div>
  );
}

export function TwoColumns() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Form className="mx-auto grid gap-x-8 space-y-12 sm:grid-cols-3">
        <LabeledGroup className="col-span-full grid grid-cols-subgrid gap-y-6">
          <div className="space-y-1">
            <Label displayLevel={2} className="leading-7">
              Profile
            </Label>
            <Text>This is how others will see you on the site.</Text>
          </div>

          <Group className="grid max-w-2xl gap-x-6 gap-y-8 sm:col-span-2 sm:grid-cols-6">
            <TextField className="sm:col-span-5">
              <Label>Username</Label>
              <Input />
              <Description>
                This is your public display name. It can be your real name or a
                pseudonym. You can only change this once every 30 days.
              </Description>
            </TextField>

            <div className="col-span-full">
              <Heading displayLevel={3} elementType="div" className="my-2">
                Profile photo
              </Heading>
              <div className="flex items-center gap-x-6">
                <Avatar
                  className="size-14 self-center rounded-full"
                  src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&auto=format&fit=facearea&facepad=3&w=256&h=256"
                  alt="Jessica Campbell"
                />

                <div className="space-y-1">
                  <FileTrigger>
                    <Button variant="outline">Upload image</Button>
                  </FileTrigger>
                  <Text>*.png or *.jpeg files up to 10MB</Text>
                </div>
              </div>
            </div>

            <div className="col-span-full grid grid-cols-1">
              <Heading displayLevel={3} className="mb-2" elementType="div">
                Cover photo
              </Heading>
              <DropZone className="w-full">
                <div className="flex flex-1 flex-col gap-2 py-6">
                  <div className="flex flex-1 justify-center">
                    <AccessibleIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        className="size-10 text-muted/50"
                      >
                        <path
                          fill="currentColor"
                          d="M18 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-4.75 3.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M4 14l3.314-7.619l3.769 6.102l3.231-1.605L16 14z"
                        />
                      </svg>
                    </AccessibleIcon>
                  </div>
                  <div className="flex flex-1">
                    <FileTrigger>
                      <Button
                        variant="unstyle"
                        className="text-nowrap text-base/6 font-semibold text-accent sm:text-sm/6"
                      >
                        Upload a file
                      </Button>
                    </FileTrigger>
                    &nbsp;
                    <Text>or drag and drop</Text>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <Text>PNG, JPG, GIF up to 10MB</Text>
                  </div>
                </div>

                <input type="hidden" name="image" />
              </DropZone>
            </div>

            <TextField className="sm:col-span-4">
              <Label>Website</Label>

              <Description>
                Add a link to your website, blog, or social media profiles.
              </Description>

              <InputGroup>
                <InputAddon>https://</InputAddon>
                <Input placeholder="www.example.com" />
              </InputGroup>
            </TextField>

            <TextField className="col-span-full">
              <Label>Bio</Label>
              <TextArea rows={5} defaultValue="I own a computer." />

              <Description>
                You can <Strong>@mention</Strong> other users and organizations
                to link to them.
              </Description>
            </TextField>
          </Group>
        </LabeledGroup>

        <Separator className="col-span-full" />

        <LabeledGroup className="col-span-full grid grid-cols-subgrid gap-y-6">
          <div className="space-y-1">
            <Label displayLevel={2} className="leading-7">
              Account
            </Label>
            <Text>
              Update your account settings. Set your preferred language and
              timezone.
            </Text>
          </div>

          <Group className="grid max-w-2xl gap-x-6 gap-y-8 sm:col-span-2 sm:grid-cols-6">
            <TextField className="col-span-full grid grid-cols-subgrid">
              <Label className="col-span-full">Name</Label>
              <Input placeholder="Your name" className="sm:col-span-3" />
              <Description className="col-span-full">
                This is the name that will be displayed on your profile and in
                emails.
              </Description>
            </TextField>

            <DatePicker className="col-span-full grid grid-cols-subgrid">
              <Label className="col-span-full">Date of birth</Label>
              <DatePickerInput />
              <Description className="col-span-full">
                Your date of birth is used to calculate your age.
              </Description>
            </DatePicker>
          </Group>
        </LabeledGroup>

        <Separator className="col-span-full" />

        <div className="col-span-full space-x-2 justify-self-end">
          <Button variant="plain">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </Form>
    </div>
  );
}
