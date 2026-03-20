# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Google Sheets integration for Admission Inquiry

Google Sheet used:

https://docs.google.com/spreadsheets/d/1B_iiq6hjpwQCGbalFdZEKRc0Cwo_kVf_Dnt2GnvZUYM/edit

Target tab: Sheet1

The admission inquiry form on /admission sends these fields:

- name
- email
- contactNumber
- course
- submittedAt
- source

### 1) Add environment variable

Create `.env` from `.env.example` and set:

```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

### 2) Create a Google Sheet

In Sheet1, add this header row exactly in row 1:

Timestamp | Name | Email | Contact Number | Course | Source

### 3) Add Google Apps Script

In Google Sheet, open Extensions > Apps Script and paste:

```javascript
function doGet() {
	return ContentService
		.createTextOutput(JSON.stringify({ success: true, message: "Web app is running" }))
		.setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
	try {
		var spreadsheetId = "1B_iiq6hjpwQCGbalFdZEKRc0Cwo_kVf_Dnt2GnvZUYM";
		var sheetName = "Sheet1";
		var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

		if (!sheet) {
			throw new Error("Sheet1 not found");
		}

		var data = {};
		if (e && e.postData && e.postData.contents) {
			try {
				data = JSON.parse(e.postData.contents);
			} catch (parseError) {
				data = {};
			}
		}

		sheet.appendRow([
			data.submittedAt || new Date().toISOString(),
			data.name || "",
			data.email || "",
			data.contactNumber || "",
			data.course || "",
			data.source || "admission-inquiry",
		]);

		return ContentService
			.createTextOutput(JSON.stringify({ success: true }))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (error) {
		return ContentService
			.createTextOutput(
				JSON.stringify({
					success: false,
					error: (error && error.message) || "Unknown error",
				})
			)
			.setMimeType(ContentService.MimeType.JSON);
	}
}
```

### 4) Deploy script

- Deploy > New deployment
- Select type: Web app
- Execute as: Me
- Who has access: Anyone

Copy the deployment URL and set it in .env as VITE_GOOGLE_SHEETS_WEB_APP_URL.

### 5) Run app

```sh
npm install
npm run dev
```

Submit the Admission Inquiry form and check new row in your Google Sheet.
