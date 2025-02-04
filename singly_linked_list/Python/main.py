class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

    def traverse(self):
        current_node = self.head
        while current_node:
            print(current_node)
            current_node = current_node.next

    def insert(self, data):
        current_node = self.head
        if not current_node:
            self.head = Node(data)
            return

        while current_node.next:
            current_node = current_node.next

        current_node.next = Node(data)
        self.length += 1

    def delete(self, node_id):
        current_node = self.head
        if current_node.data.get("id") == node_id:
            self.head = current_node.next
            return

        while current_node.next:
            if current_node.next.data.get("id") == node_id:
                current_node.next = current_node.next.next
                self.length -= 1
                break

    def search(self, node_id):
        current_node = self.head
        while current_node:
            if current_node.data.get("id") == node_id:
                break
            current_node = current_node.next
        return current_node


class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

    def __str__(self):
        return f"Node data:{self.data}, next: {self.next}"


my_list = SinglyLinkedList()
my_list.insert({"id": 1, "car": "bmw"})
my_list.insert({"id": 2, "car": "son"})
my_list.insert({"id": 7, "car": "oop"})
my_list.insert({"id": 3, "car": "umw"})


my_list.delete(2)

my_list.traverse()

print("Search: ", my_list.search(7))
