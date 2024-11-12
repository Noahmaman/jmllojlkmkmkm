import { useState } from 'react'
import { Bell, Home, Users, DollarSign, Tool, BarChart2, Plus, Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-100 to-purple-200 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">RentalPro</h1>
          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5 text-purple-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New maintenance request</DropdownMenuItem>
                <DropdownMenuItem>Rent payment received</DropdownMenuItem>
                <DropdownMenuItem>New tenant application</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
                className="rounded-full"
              />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Properties</CardTitle>
              <Home className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">4 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tenants</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">7 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$52,450</div>
              <p className="text-xs text-muted-foreground">+20% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
              <Tool className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 resolved this week</p>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analytics</CardTitle>
              <BarChart2 className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="h-72 bg-gradient-to-r from-purple-100 to-purple-200 rounded-md flex items-center justify-center">
                <p className="text-purple-600">Analytics Chart Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activities</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>Stay updated with the latest events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <DollarSign className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Rent Collected</p>
                    <p className="text-sm text-muted-foreground">$1,200 from Apartment 3B</p>
                  </div>
                  <span className="ml-auto text-sm text-muted-foreground">2 hours ago</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Tool className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Maintenance Request</p>
                    <p className="text-sm text-muted-foreground">Leaky faucet in Unit 5C</p>
                  </div>
                  <span className="ml-auto text-sm text-muted-foreground">1 day ago</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">New Tenant</p>
                    <p className="text-sm text-muted-foreground">Sarah Johnson moved into Apartment 2A</p>
                  </div>
                  <span className="ml-auto text-sm text-muted-foreground">3 days ago</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Button
        className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  )
}