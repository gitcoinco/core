# @gitcoin/ui

## 0.0.0-beta.22

### Patch Changes

- [#40](https://github.com/gitcoinco/core/pull/40) [`2a58e93`](https://github.com/gitcoinco/core/commit/2a58e93965cfb5efd5122354efee9ab67ae1cbfe) Thanks [@nijoe1](https://github.com/nijoe1)! - fix: ballot form first render handling

## 0.0.0-beta.21

### Patch Changes

- fix(ui): NotFoundPage should be full height

## 0.0.0-beta.20

### Patch Changes

- [#37](https://github.com/gitcoinco/core/pull/37) [`ef6701f`](https://github.com/gitcoinco/core/commit/ef6701ffabdf4cd73f4020be2eef7891e7d91cec) Thanks [@nijoe1](https://github.com/nijoe1)! - ### Features

  - Refactored themes package using `tw-colors`
  - Added new icons to the library
  - Created new `IconWithTooltip` component
  - Implemented pagination primitive with theme support
  - Built Retrofunding leaderboard component with theme support

  ### Improvements

  - Enhanced `IconLabel` component functionality
  - Upgraded `Select` component with better UX

## 0.0.0-beta.19

### Patch Changes

- implemented NotFoundPage

## 0.0.0-beta.18

### Patch Changes

- implemented Spinner component

## 0.0.0-beta.17

### Patch Changes

- (retrofunding): changed props in LandingPage "actionButton" -> "children"

## 0.0.0-beta.16

### Patch Changes

- [#31](https://github.com/gitcoinco/core/pull/31) [`aabdc5f`](https://github.com/gitcoinco/core/commit/aabdc5f0e01ae382de435d3010e704f3ea8b8292) Thanks [@nijoe1](https://github.com/nijoe1)! - chore: updated retrofunding landing pages svgs

## 0.0.0-beta.15

### Patch Changes

- [#29](https://github.com/gitcoinco/core/pull/29) [`378e333`](https://github.com/gitcoinco/core/commit/378e3339cd77240a5f0ca2af43c325d8c9d5f5f5) Thanks [@nijoe1](https://github.com/nijoe1)! - feat: UI Component Enhancements

  - Added new icon components
  - Added warning toaster component
  - Made IconLabel component more modular
  - Updated markdown editor action buttons to match designs
  - Added summary section support in progress form
  - Added clickable side navigation for form steps

  chore: Component Organization

  - Moved Input component to primitives
  - Moved Label component to primitives
  - Made allowlist import button optional

  fix: Markdown editor styling matches design spec

## 0.0.0-beta.14

### Patch Changes

- [#27](https://github.com/gitcoinco/core/pull/27) [`1f93b17`](https://github.com/gitcoinco/core/commit/1f93b17a28fb5cc08bc5a3e8bc1b0745347e4a61) Thanks [@nijoe1](https://github.com/nijoe1)! - Export dialog and table

## 0.0.0-beta.13

### Patch Changes

- [#25](https://github.com/gitcoinco/core/pull/25) [`3c2472b`](https://github.com/gitcoinco/core/commit/3c2472bcb1dc94d60f8668ef44748bb991481c4f) Thanks [@nijoe1](https://github.com/nijoe1)! - chore: moved table to primitives

  chore: moved dialog to primitives

  chore: removed accordion as it already exists on primitives

## 0.0.0-beta.12

### Patch Changes

- feature: implemented BallotForm
- fix: onWheel functionality for DistributeTable

## 0.0.0-beta.11

### Patch Changes

- [#20](https://github.com/gitcoinco/core/pull/20) [`c104d69`](https://github.com/gitcoinco/core/commit/c104d6913051a937acbe154b7d38f6f37a763d43) Thanks [@nijoe1](https://github.com/nijoe1)! - ### Features

  - **Get Transaction URL:** Added the `getTransactionUrl` utility function.
  - **SVG Conversion:** Added a utility to convert SVG to Blob.
  - **Retrofunding:** Created the retrofunding distribute component.
  - **Form Validation:** Added a number validation utility in forms.
  - **Math Utilities:** Enhanced math utilities and included a reset for editing ballots.

  ### Chores

  - **Select Component:** Enhanced the Select component (added SVG icon support and additional
    improvements).
  - **UI Props:** Added missing Radix UI props to Switch and Checkbox components.
  - **Tailwind Variants:** Improved Tailwind variants for statCard/Group.
  - **Storybook:** Updated story args to demonstrate the new math utilities.
  - **Types Migration:** Moved distribute types to the types folder.
  - **General Improvements:** Miscellaneous improvements.

## 0.0.0-beta.10

### Patch Changes

- fix: removed Navbar typo in central section

## 0.0.0-beta.9

### Patch Changes

- added classname prop to AllocationSidebar and MetricsBallot

## 0.0.0-beta.8

### Patch Changes

- [#17](https://github.com/gitcoinco/core/pull/17) [`0bcc698`](https://github.com/gitcoinco/core/commit/0bcc698f68026f303f5f8b5f34a13de50483b5ed) Thanks [@thelostone-mc](https://github.com/thelostone-mc)! - set min review to 1 on checker

## 0.0.0-beta.7

### Patch Changes

- [#15](https://github.com/gitcoinco/core/pull/15) [`5884d4f`](https://github.com/gitcoinco/core/commit/5884d4f73a4a21df68ec4a489b74724e62b16aee) Thanks [@thelostone-mc](https://github.com/thelostone-mc)! - fix read only error

## 0.0.0-beta.6

### Patch Changes

- [#13](https://github.com/gitcoinco/core/pull/13) [`89b7bb4`](https://github.com/gitcoinco/core/commit/89b7bb4655a7b03cee364f09e70082901bfa9801) Thanks [@thelostone-mc](https://github.com/thelostone-mc)! - improvements to date picker, checker

## 0.0.0-beta.5

### Patch Changes

- [#10](https://github.com/gitcoinco/core/pull/10) [`9bb43f0`](https://github.com/gitcoinco/core/commit/9bb43f096dd444962713ee67ea421ff1fc38e265) Thanks [@nijoe1](https://github.com/nijoe1)! - Forms refactoring: Added support for Form(Without persistence) and FormWithPersist

## 0.0.0-beta.4

### Patch Changes

- [#7](https://github.com/gitcoinco/core/pull/7) [`efdab98`](https://github.com/gitcoinco/core/commit/efdab9808a3df10da5fbbe5e08f26f524ebaff53) Thanks [@thelostone-mc](https://github.com/thelostone-mc)! - direct grants status fix

## 0.0.0-beta.3

### Patch Changes

- [#5](https://github.com/gitcoinco/core/pull/5) [`cc1a895`](https://github.com/gitcoinco/core/commit/cc1a895ad3e81120cf7f82cd7c15ec343def7b84) Thanks [@nijoe1](https://github.com/nijoe1)! - ### Features

  - Created new program picker modal component for improved program selection
  - Refactored carousel component for better performance and maintainability

  ### Bug Fixes

  - Improved disabled field styling
  - Fixed conditional padding in review application page checker
  - Updated program list filter placeholder text

  ### Chores

  - Enhanced IndexDB implementation
  - Added mock service worker file for testing purposes

## 0.0.0-beta.2

### Patch Changes

- [#3](https://github.com/gitcoinco/core/pull/3) [`81c843c`](https://github.com/gitcoinco/core/commit/81c843c5234387e8ae5311d3c253d66ce4f43c3a) Thanks [@hussedev](https://github.com/hussedev)! - Added disabled input and improvements for pool details

## 0.0.0-beta.1

### Patch Changes

- [#1](https://github.com/gitcoinco/core/pull/1) [`f912011`](https://github.com/gitcoinco/core/commit/f912011edfe5a4658abc72202b64c4f7cd699f85) Thanks [@hussedev](https://github.com/hussedev)! - fix: theme not published

## 0.0.0-beta.0

### Patch Changes

- First release of Gitcoin Core
