﻿# Shiftease

## LUC COMP 330 Project 3 - Spring 2019

# 1. Introduction

## 1.1 Purpose

Our purpose for ShiftEase is to make the painstaking process of creating schedules more easily and efficiently, as well as making the process faster.

## 1.2 Document Conventions

This document uses no special formatting conventions.

## 1.3 Intended Audience and Reading Suggestions

Our intended audience for ShiftEase is employees who need help in scheduling their meetings and managers who need to create the schedule.

- why is it beneficial for them? other possible groups that could benefit.
  reading suggestions: refer people to the overall description section (2) and System Features section.

## 1.4 Product Scope

short description of software, what it's for, benefits it provides, objectives and goals of the project

# 2 Overall Description

## 2.1 Product Perspective

Shiftease is a web application designed to help people schedule their work shifts in a proper and efficient manner without going through the pains of standard excel scheduling sheet. A long term goal would be to make scheduling more efficent by adding more functionalities and views. 

## 2.2 Product Functions

main functional requirements: 1) two user interfaces for visualizing the current schedule, one for managers and one for employees, 2) managers can make schedule, 3) employees can input info necessary for manager to make schedule (availability)

The frontend will consist of multiple employee views, manager view, etc. It will also allow users to input schedules, update schedules, and view schedules Certain views will have more capabilities that will allow managers to create recurring schedules and add/delete users. The backend would consist of database which would store ID for certain employees that would be match to scheudle for certain day. It would take in the employee ID, timestamp (start and end date). Lastly, it would check if any employee is working that day and see if there are any conflicts. 

## 2.3 User Classes and Characteristics

though, as mentioned, this product can potentially benefit a variety of users, we will use the terminology of "employee" and "manager" for the two types of users, referring to a user who is scheduled for shifts and a user who shcedules shifts, respectively

1. managers: can make schedules and can view all employees' shifts, 2) employees: can provide availability and view either all employees' shifts or only their own
   note: intended to help any manager or employee, regardless of demographic or other business attributes

## 2.4 Operating Environment

this is a web app, so our product will run in any web browser

## 2.5 Design and Implementation Constraints

internet connection is required, schedule is limited to the information provided by the employees, schedule will not be available to employees until manager makes it

## 2.6 User Documentation

example of how google sheet should be formatted for app to work properly
see FAQs, manuals, tutorials, etc for how to use the app.

## 2.7 Assumptions and Dependencies

you have a modern computer with an up to date web browser (chrome, firefox, ie8 or above) and internet connection.
manager should have google sheet with users availability filled in according to section 2.6 in this document

# 3 External Interface Requirements

## 3.1 User Interfaces

**put mockups here**

1. Employee Schedule View
2. Manager Schedule View
3. Employee Provide Availability View
4. Manager make schedule view

# 4 System Features

## 4.1 View Schedule

### 4.1.1 Description and Priority

Viewing the schedule is of high priority for Shiftease. In doing so, we allow both managers and employees to view current schedule for upcoming month.

### 4.1.2 Stimulus / Response Sequences

Viewing the schedule is largely static for the user, based purely on how the manager has made the schedule. That said, Employees can toggle between viewing only their shifts for the upcoming month or all employees' shifts.

## 4.2 Make Schedule

**fill in these in style of 4.1**

### 4.2.1 Description and Priority

### 4.2.2 Stimulus / Response Sequences

## 4.3 Provide Availability

### 4.3.1 Description and Priority

### 4.3.2 Stimulus / Response Sequences

# 5 Other Nonfunctional Requirements

## 5.1 Performance Requirements

Mainly scheduling algorithm itself, speed and accuracy

## 5.2 Security Requirements

Be able to log in, don't get hacked

## 5.3 Software Quality Attributes

Usability, testability, availability
