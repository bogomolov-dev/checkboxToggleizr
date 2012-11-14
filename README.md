# checkboxToggleizr
Check or uncheck all checkboxes by one element referenced by a `data-reference` attribute.


## How to Use?
```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
<script src="dist/jquery.checkboxToggleizr.min.js"></script>
<script>
	$('#select-all').checkboxToggleizr({ invert: false });
</script>
```

```html
<table>
  <thead>
    <tr>
      <th colspan="2">Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td colspan="3">
        <label><input type="checkbox" id="select-all" data-reference="items[]" /> Select all</label>
      </td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td><input type="checkbox" name="items[]" value="1" /></td>
      <td>Ben</td>
      <td>22</td>
    </tr>
    <tr>
      <td><input type="checkbox" name="items[]" value="2" /></td>
      <td>Marc</td>
      <td>48</td>
    </tr>
    <tr>
      <td><input type="checkbox" name="items[]" value="3" /></td>
      <td>Tom</td>
      <td>20</td>
    </tr>
    <tr>
      <td><input type="checkbox" name="items[]" value="4" /></td>
      <td>Bennet</td>
      <td>25</td>
    </tr>
    <tr>
      <td><input type="checkbox" name="items[]" value="5" /></td>
      <td>Max</td>
      <td>37</td>
    </tr>
  </tbody>
</table>
```

## Options
<table>
  <thead>
    <tr>
      <th>Option</th/>
      <th>Arguments</th/>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>invert</td>
      <td>
        true / **false** <br />
        <em>default: false</em>
      </td>
      <td>
        If false, all checkboxes will be checkt/unchecked.<br />
        If `true` all checkboxes will be inverted. (Checked become unchecked and unchecked become checked.
      </td>
    </tr>
  </tbody>
</table>