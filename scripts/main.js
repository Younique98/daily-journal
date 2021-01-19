import {JournalEntryComponent} from './JournalEntry.js'
import {useJournalEntries} from './JournalDataProvider.js'

const allTheJournalEntryComponent = useJournalEntries()

for (const journal of allTheJournalEntryComponent) {
    console.log(journal)
};
// Import the JournalEntry here
import {EntryListComponent} from './JournalEntryList.js'
EntryListComponent()



console.log("Welcome to the main module")
