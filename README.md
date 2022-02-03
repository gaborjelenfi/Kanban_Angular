# Kanban

### Live demo: <a href="https://dzsub-kanban.surge.sh/" target="_blank">Kanban</a>

The app using dummy data for the demo. Added data not saving on browers refresh, this is an MVP.

## Used Stack

 - Angular 2+
 - Material UI

## Features

### Control panel:

Use the **Task** input field for adding text to the new task.

Add priority with the **radio button** that also change the border color of the task.

 - Add priority
   - low
   - medium
   - high

With the **Add** button you can save the new task and add to the **Backlog** column.

With the **Reset** button you can clear the form.

### On existing task:

Rerender the task position inside the column or move it to another column with **drag and drop**.

**Click** on any task and the **Control** panel get its data. 
Change anything and use the **Save** button for saving it.
Or **Cancel** button for cancel any changes.


### Deleting a task

When you **draging** an item, on the buttom left corner, a red box will appear with ``` Drop here to Delete ``` text.
To delete an item just simply drop inside the red box.







